const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('select * from Lenguajes_Programacion', (err, rows) => {
            if (err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        console.log(req.body);
        conn.query('INSERT INTO Lenguajes_Programacion set ?', [req.body], (err, rows) => {
            if (err) return res.send(err);

            res.send('Registro insertado!');
        });
    });
});

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('DELETE FROM Lenguajes_Programacion WHERE id=?', [req.params.id], (err, rows) => {
            if (err) return res.send(err);

            res.send('Registro Eliminado!');
        });
    });
});

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('UPDATE Lenguajes_Programacion set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);

            res.send('Registro Actualizado!');
        });
    });
});

module.exports = routes;