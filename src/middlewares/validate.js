module.exports = (scheme) => {

    return (req, res, next) => {
        let resul = scheme.validate(req.body)

        if (resul.error){
            next(resul.error)
        }else{
            next()
        }
    }
}