markdown# CLAUDE.md — Contexte pour Claude Code

Ce fichier structure comment je travaille avec Claude Code sur les projets d'automatisation.

## Principes fondamentaux

1. **Processus avant les outils.** Je cartographie les workflows, puis je choisis la bonne plateforme.
2. **Sécurité en premier.** Jamais de clés API en dur. Variables d'environnement ou Bitwarden.
3. **Code réutilisable.** Chaque script est un template pour le prochain client.
4. **Output clair.** Structures JSON, APIs documentées, cas de test inclus.

## Quand utiliser Claude Code

✅ Écrire du code de liaison entre APIs (petits scripts)
✅ Débugger des payloads webhook (comprendre ce qui arrive)
✅ Générer de la documentation (README, docs API)
✅ Créer des fonctions utilitaires (parseurs JSON, transformateurs)
✅ Écrire des nodes personnalisés n8n (JavaScript)

❌ Ne pas utiliser Claude Code pour éviter de comprendre quelque chose
❌ Ne pas copier-coller sans lire le code
❌ Ne pas exposer de clés API dans les scripts

## Workflow typique

1. Je décris un problème : "Je dois transformer des enregistrements Airtable en posts WordPress"
2. Je fournis du contexte : le schéma Airtable, la structure du post WordPress, les transformations
3. Claude Code écrit le script
4. Je LIS LE CODE, je le comprends, puis je l'utilise
5. Je documente ce qu'il fait dans ce repo

## Patterns d'API que j'utilise fréquemment

- **Airtable API** — REST, ID base + nom table + Bearer token
- **Claude API / OpenAI API** — JSON request/response, température, comptage tokens
- **Webhooks n8n** — Validation payload, gestion erreurs
- **WordPress REST** — Authentification JWT ou app passwords, custom post types
- **Zapier / Make** — Signatures webhook pour sécurité

## Structure de fichier pour chaque script

```javascript
/**
 * Script: [nom]
 * Objectif: [ce qu'il fait]
 * Input: [schéma ou exemple]
 * Output: [schéma ou résultat attendu]
 * Auth: [quelle clé API, où elle vit]
 */

// Implémentation
const apiKey = process.env.AIRTABLE_API_KEY; // Jamais en dur

// Exemple d'utilisation
// node script.js --input "data.json"
```

## Templates de prompt rapides

Quand je demande de l'aide à Claude Code, j'inclus :
Je dois [QUOI].
Input: [exemple JSON ou structure]
Output: [résultat attendu]
Auth: [quelle API, où vit la clé]
Contraintes: [gestion erreurs, rate limits, etc.]
Le code doit être:

Réutilisable (paramétré, pas en dur)
Documenté (commentaires sur le pourquoi, pas juste le quoi)
Sécurisé (pas de secrets dans le code)
Testé (inclure les cas d'erreur)


## Projets actuels utilisant Claude Code

- [Nom du projet] – [description brève]

## Références rapides

- **Docs Anthropic** : https://docs.anthropic.com
- **n8n Docs** : https://docs.n8n.io
- **Airtable API** : https://airtable.com/api
- **WordPress REST** : https://developer.wordpress.org/rest-api/
- **OpenAI API** : https://platform.openai.com/docs

---

*Dernière mise à jour : 23 mai 2026. Ce fichier évolue au fur et à mesure de l'apprentissage.*