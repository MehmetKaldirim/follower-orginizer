const fetchMoviesHandler = async () => {
    for (let i = 1; i < followers.length; i++) {
        const dummyFollower = followers[i].string_list_data[0];
        const value = followers[i].string_list_data[0].value;
        followerValue.push(value);
        const follower = { ...dummyFollower, id: i };
        newFollower.push(follower);
    }

    try {
        const res = await axios.get("http://172.20.10.3:8081/programs/api/v3");

        console.log("tata = " + JSON.stringify(res.data.data));
        const dataList = JSON.stringify(res.data.data);

        for (let i = 1; i < dataList.length; i++) {
            const program = {
                id: dataList[i].id,
                duration: dataList[i].duration,
                completedTime: dataList[i].studyProgress,
                descriprion: "Is nothing",
            };
            programs.push(program);
        }

        console.log("here new object = " + programs);
    } catch (error) {
        console.log(error.message);
    }
};