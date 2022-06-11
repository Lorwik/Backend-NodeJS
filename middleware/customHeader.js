const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;

        if (apiKey === 'manuel-01') {
            next();
        } else {
            res.statys(403);
            res.send({error: "API_KEY_NO ES_CORRECTA"});
        }

    } catch (error) {
        res.statys(403);
        res.send({error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"});
    }
}

module.exports = customHeader;