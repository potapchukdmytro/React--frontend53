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

function Inputs() {
    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                width: "33%",
                margin: "0px auto",
            }}
        >
            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Текстове поле</label>
                </div>
                <input style={formInput} type="text" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для пошти</label>
                </div>
                <input style={formInput} type="email" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для паролю</label>
                </div>
                <input style={formInput} type="password" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для телефону</label>
                </div>
                <input style={formInput} type="tel" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для посилання</label>
                </div>
                <input style={formInput} type="url" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для пошуку</label>
                </div>
                <input style={formInput} type="search" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для чисел</label>
                </div>
                <input style={formInput} type="number" min={0} max={10} />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Бігунець</label>
                </div>
                <input
                    style={formInput}
                    step={10}
                    min={0}
                    max={100}
                    type="range"
                />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для часу</label>
                </div>
                <input style={formInput} type="time" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для дати</label>
                </div>
                <input style={formInput} type="date" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для дати та часу</label>
                </div>
                <input style={formInput} type="datetime-local" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Поле для тижня</label>
                </div>
                <input style={formInput} type="week" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <input style={formInput} type="checkbox" />
                    <label>Checkbox</label>
                </div>
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <input style={formInput} type="checkbox" />
                    <label>Погоджуюся з правилами</label>
                </div>
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <input name="size" style={formInput} type="radio" />
                    <label>Маленький</label>
                </div>
                <div style={formLabel}>
                    <input name="size" style={formInput} type="radio" />
                    <label>Середній</label>
                </div>
                <div style={formLabel}>
                    <input name="size" style={formInput} type="radio" />
                    <label>Великий</label>
                </div>
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Кнопка для вибору кольору</label>
                </div>
                <input style={formInput} type="color" />
            </div>

            <div style={fieldsGroup}>
                <div style={formLabel}>
                    <label>Завантажити файл</label>
                </div>
                <input style={formInput} type="file" />
            </div>

            <div style={{ margin: "15px 0px" }}>
                <input type="submit" value="Підтвердити" />
                <input type="reset" value="Очистити" />
            </div>
        </form>
    );
}

export default Inputs;
