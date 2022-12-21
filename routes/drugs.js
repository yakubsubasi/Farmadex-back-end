const express = require('express')
const { getDrug, searchActiveSubstance, getActiveSubstance, getDrugsBySubstance } = require('../controllers/drugs')
const router = express.Router()

router.use('/getDrug', getDrug)

router.get('/searchSubstance', searchActiveSubstance)
router.get('/getActiveSubstance', getActiveSubstance)
router.get('/getDrugsBySubstance', getDrugsBySubstance)

module.exports = router