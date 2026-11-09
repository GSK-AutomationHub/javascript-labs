
const fetchUserInfo = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2');//async step

        if (!response.ok) {
            throw new Error('user data not found...');
        }

        //parse json response:
        const userData = await response.json();//async step:
        console.log(userData);
    }
    catch (error) {
        console.log("Error:", error);
    }

}

//call the function:
fetchUserInfo();