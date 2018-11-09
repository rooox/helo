module.exports = {
    createUser: (req, res) => {
        let { username, password } = req.body;
        let db = req.app.get('db');
        db.create_user([username, password]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        })

    },

    login: (req, res) => {
        let { username, password } = req.body;
        let db = req.app.get('db');
        let [foundUser] = db.find_user([username, password]);
        if (result) {
            req.session.user = { username: foundUser.username };
            res.status(200).send({ message: 'loggedIn' })
        } else {
            res.status(401).send({ message: 'Username or password is incorrect' })
        }
    },

    getPosts: (req, res) => {
        const db = req.app.get('db');
        db.get_posts().then((posts) => res.status(200).send(posts))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    }
}