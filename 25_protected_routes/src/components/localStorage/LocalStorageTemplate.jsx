function LocalStorageTemplate() {
    // localStorage.setItem(key, value); - записує value по ключу key
    // Якщо ключ не існує то створить його, а якщо існує то перепише value
    // localStorage.setItem("myData", "Hello world");

    // localStorage.getItem(key); - повертає value по ключу key
    // Якщо ключ не існує то повертається null

    const key = "fsdfsd";
    const value = localStorage.getItem(key);
    if (value) {
        console.log(value);
    } else {
        console.log(`Ключ ${key} не існує`);
    }

    // localStorage.removeItem(key); - видаляє запис з localstorage по ключу key
    localStorage.removeItem("myData");

    function writeObject() {
        const user = {
            email: "user@mail.com",
            password: "qwerty",
            userName: "mike"
        }

        localStorage.setItem("userData", JSON.stringify(user));
    }

    function readObject() {
        const userJson = localStorage.getItem("userData");
        if(userJson) {
            const user = JSON.parse(userJson);
            console.log(user.email);
        }
    }

    function pushItem() {
        const valuesJson = localStorage.getItem("randomValues");
        if(valuesJson) {
            const values = JSON.parse(valuesJson);
            values.push(Math.floor(Math.random() * 100));
            localStorage.setItem("randomValues", JSON.stringify(values));
        } else {
            const values = [Math.floor(Math.random() * 100)];
            localStorage.setItem("randomValues", JSON.stringify(values));
        }
    }

    function popItem() {
        const valuesJson = localStorage.getItem("randomValues");
        if(valuesJson) {
            const values = JSON.parse(valuesJson);
            if(values.length > 0) {
                values.pop();
                localStorage.setItem("randomValues", JSON.stringify(values));
            }
        }
    }

    return (
        <div style={{width: "20%", margin: "auto"}}>
            <button onClick={writeObject}>Write</button>
            <button onClick={readObject}>Read</button>
            <br/>
            <button onClick={pushItem}>Push item</button>
            <button onClick={popItem}>Pop item</button>
        </div>
    );
}

export default LocalStorageTemplate;
