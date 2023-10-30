const mariRoute = (req, res) => {
    res.send('Mari');
};

const tannerRoute = (req, res) => {
    res.send('Tanner Overbay');
};

const hannaRoute = (req, res) => {
    res.send('Hanna Birch');
};

module.exports ={
    tannerRoute,
    mariRoute,
    hannaRoute
};