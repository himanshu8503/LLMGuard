import experss from "experss"

const port = prosecc.env.ENV_PORT || 8000;
const app = experss();


app.use(experss.json());


app.listen(port,(req,res) => {
    console.log(`The Server is on ${port}`);
});
