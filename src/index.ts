import { runningTask } from './filePath';
import express from 'express';
import compression from 'compression';
const app = express();
import ssr from "./route/ssr";

app.use(compression());
app.use(express.static('public'));
app.use('/firstssr', ssr)

app.get('/', (req, res) => {
    const date = new Date();
    res.send(`This a response from Express JS  at ${date}`);
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
    // runningTask();
    console.log('Hello World');
})




