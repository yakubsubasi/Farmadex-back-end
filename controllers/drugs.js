const pool = require('../utils/db')

const getDrug = async (req, res) => {
    const result = await pool.query('SELECT * FROM ilac_detay')
    console.log(result.rows)
    res.status(200).json(result.rows)
}


const searchActiveSubstance = async (req, res) => {

    let substanceName = req.query.search
    console.log(substanceName)

    const result = await pool.query("select * from etken_madde WHERE atc_adi LIKE('%" + substanceName + "%') ORDER BY atc_adi LIMIT 50")
    // for searching from a browser, use this:
    // http://localhost:8080/drugs/searchSubstance?search=

    res.status(200).json(result.rows)
}

const getActiveSubstance = async (req, res) => {
    const result = await pool.query("SELECT * FROM etken_madde LIMIT 50 OFFSET 1")


    console.log(result.rows)
    res.status(200).json(result.rows)

    // for searching from a browser, use this:
    // http://localhost:8080/drugs/getActiveSubstance
}

const getDrugBySubstance = async (req, res) => {
    const result = await pool.query("SELECT * FROM ilac_detay WHERE atc_kodu LIKE '%" + req.query.atc_kodu + "%' LIMIT 50")
    console.log(result.rows)
    res.status(200).json(result.rows)

    // for searching from a browser, use this:
    // http://localhost:8080/drugs/getDrugsBySubstance?atc_kodu=
}




module.exports = { searchActiveSubstance, getDrug, getActiveSubstance, getDrugsBySubstance: getDrugBySubstance }
