import { useFormik } from "formik";
import { useEffect } from "react";
import { useAction } from "../../../hooks/useAction";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Spiner from "../../../components/spiner/Spiner";
import { toast } from "react-toastify";
import { useCreateBookMutation } from "../../../store/services/bookApi";
import { Helmet } from "react-helmet-async";

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

function CreateBook() {
    const navigate = useNavigate();
    const { loadAuthors } = useAction();
    const {
        authors,
        isLoading: authorsLoading,
        isLoaded,
    } = useSelector((state) => state.author);

    const [createBook] = useCreateBookMutation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        loadAuthors();
    }, []);

    async function submitHandler(values) {
        try {
            // unwrap - говорить rtk викинути помилку на ззовні що дає змогу краще її обробити власним try catch
            const res = await createBook(values).unwrap();
            if (res.data.success) {
                toast.success("Книга успішно додана");
                navigate("/");
            } else {
                toast.error("Помилка під час додавання книги");
            }
        } catch (error) {
            toast.error("Помилка під час додавання книги");
        }
    }

    const initValues = {
        title: "",
        description: "",
        image: "",
        rating: "0",
        price: 0,
        numberOfPages: 0,
        publishDate: 0,
        authorId: 0,
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler,
    });

    if (authorsLoading) {
        return <Spiner />;
    }

    return (
        <div>
            <Helmet>
                <title>Додавання книги</title>
            </Helmet>
            <h1>Додавання книги</h1>
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
                    <input style={submitStyle} type="submit" value="Додати" />
                </div>
            </form>
        </div>
    );
}

export default CreateBook;
