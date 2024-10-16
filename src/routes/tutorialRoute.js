import { Router } from "express";
import Tutorial from '../models/tutorialModel.js';

const router = Router();

// CREATE a new tutorial
router.post('/tutorials', async (req, res) => {
    const { title, description, published } = req.body;

    try {
        const tutorial = new Tutorial({ title, description, published });
        await tutorial.save();
        res.status(201).json(tutorial);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create tutorial' });
    }
});

// READ all tutorials
router.get('/tutorials', async (req, res) => {
    try {
        const tutorials = await Tutorial.find();
        res.json(tutorials);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tutorials' });
    }
});

// READ a specific tutorial by ID
router.get('/tutorials/:id', async (req, res) => {
    try {
        const tutorial = await Tutorial.findById(req.params.id);
        if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' });
        res.json(tutorial);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tutorial' });
    }
});

// UPDATE a tutorial
router.put('/tutorials/:id', async (req, res) => {
    try {
        const updatedTutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTutorial) return res.status(404).json({ error: 'Tutorial not found' });
        res.json(updatedTutorial);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update tutorial' });
    }
});

// DELETE a tutorial
router.delete('/tutorials/:id', async (req, res) => {
    try {
        const deletedTutorial = await Tutorial.findByIdAndDelete(req.params.id);
        if (!deletedTutorial) return res.status(404).json({ error: 'Tutorial not found' });
        res.json({ message: 'Tutorial deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete tutorial' });
    }
});

export default router;
