import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import Spiner from "../../components/spiner/Spiner";
import { toast } from "react-toastify";
import { api } from "../../api";
import { useUpdateBookMutation } from "../../store/services/bookApi";

const fieldsGroup = {
    display: "flex",
    flexDirection: "column",
    margin: "8px 0px",
};

const formLabel = {
    textAlign: "start",
    color: "white",
};

const formInput = {
    fontSize: "1.05em",
};

const formCheckbox = {
    transform: "scale(1.3)",
    marginRight: "10px",
};

const submitStyle = {
    fontSize: "1.03em",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#aa3bff1a",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    boxShadow: "1px 1px 5px grey",
    width: "75%",
};

const errorStyle = {
    fontSize: "0.7em",
    color: "coral",
    whiteSpace: "nowrap",
    textAlign: "start",
    height: "20px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "20px",
};

function UpdateBook() {
    const [book, setBook] = useState(null);
    const navigate = useNavigate();
    const { loadAuthors } = useAction();
    const { authors, isLoading, isLoaded } = useSelector(
        (state) => state.author,
    );

    const [updateBook] = useUpdateBookMutation();

    const { id } = useParams();

    const formik = useFormik({
        initialValues: {
            title: book?.title || "",
            description: book?.description || "",
            image: book?.image || "",
            rating: book?.rating || "0",
            price: book?.price || 0,
            numberOfPages: book?.number_of_pages || 0,
            publishDate: book?.publish_date || 0,
            authorId: book?.author ? book?.author.id : 0 || 0,
        },
        onSubmit: submitHandler,
        enableReinitialize: true,
    });

    async function fetchBook() {
        try {
            const response = await api.get(`books/${id}`);
            const { data } = response;
            setBook(data.payload);
        } catch (error) {
            navigate("/", { replace: "true" });
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0 });
        loadAuthors();
        fetchBook();
    }, []);

    async function submitHandler(values) {        
        const res = await updateBook({...values, id: id});
        
        if (res.data.success) {
            toast.success("Книгу успішно змінено");
            navigate(-1);
        } else {
            toast.error("Помилка під час редагування книги");
        }
    }

    if (isLoading || !book) {
        return <Spiner />;
    }

    return (
        <div>
            <h1>Редагування книги</h1>
            <form
                onSubmit={formik.handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33%",
                    margin: "0px auto",
                }}
            >
                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Назва</label>
                    </div>
                    <input
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        name="title"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Опис</label>
                    </div>
                    <input
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        name="description"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Зображення</label>
                    </div>
                    <input
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        name="image"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Рейтинг</label>
                    </div>
                    <input
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                        name="rating"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Ціна</label>
                    </div>
                    <input
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        name="price"
                        style={formInput}
                        type="number"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Кількість сторінок</label>
                    </div>
                    <input
                        value={formik.values.numberOfPages}
                        onChange={formik.handleChange}
                        name="numberOfPages"
                        style={formInput}
                        type="number"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Рік публікації</label>
                    </div>
                    <input
                        value={formik.values.publishDate}
                        onChange={formik.handleChange}
                        name="publishDate"
                        style={formInput}
                        type="number"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Автор</label>
                    </div>
                    <select
                        value={formik.values.authorId}
                        onChange={formik.handleChange}
                        name="authorId"
                        style={formInput}
                        type="number"
                    >
                        <option value={0}>Невідомий</option>
                        {isLoaded &&
                            authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            ))}
                    </select>
                </div>

                <div style={{ margin: "15px 0px" }}>
                    <input style={submitStyle} type="submit" value="Зберегти" />
                </div>
            </form>
        </div>
    );
}

export default UpdateBook;
