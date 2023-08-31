import express from "express"

const router = express.Router()
import { todasSeries, seriePorId, insereSerie, atualizaSerie, deletaSerie} from '../controllers/series.js'




router.get('/', todasSeries)

router.get('/:id', seriePorId)

router.post('/', insereSerie)

router.put('/:id', atualizaSerie)

router.delete('/:id', deletaSerie)


export default router