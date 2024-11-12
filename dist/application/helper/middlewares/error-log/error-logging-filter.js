"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Middleware de gestion des erreurs
function errorLoggingMiddleware(err, req, res, next) {
    // Log l'erreur
    console.error('Erreur capturée:', err);
    // Répondre avec un message d'erreur générique
    res.status(500).json({
        message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.',
    });
}
exports.default = errorLoggingMiddleware;
