import express from 'express';
const app = express();

app.get('/', (req: any, res: any) => {
    res.json({
        status: 'ok',
        type: 'typescript'
    })
})
app.listen(3030, () => console.log('server on'))