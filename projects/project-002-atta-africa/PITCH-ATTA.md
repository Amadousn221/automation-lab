# Pitch ATTA Africa — Réduction coûts & Automatisation

**Client :** ATTA Africa
**Préparé par :** Amadou
**Date :** 23 mai 2026

---

## 1. Le problème

ATTA Africa dépense aujourd'hui **189 €/mois** sur deux outils — Klaviyo et Judge.me — et Amadou passe **2 heures par mois** à consolider manuellement des données ventes dans Excel. Ce n'est ni scalable ni rentable au stade actuel.

Concrètement :
- Anta et Fabinetou traitent les commandes manuellement, avec un délai de plusieurs jours
- Aucun dashboard temps réel des ventes par taille, couleur ou set
- Klaviyo est connecté à Shopify mais sous-utilisé — trop cher pour le volume actuel
- Judge.me collecte des avis que personne n'analyse de manière structurée

**Ce que ça coûte si on ne fait rien :** 2 268 €/an en abonnements + temps perdu = ressources englouties sans retour mesurable.

---

## 2. La solution proposée

Remplacer la stack actuelle par trois outils open-source et low-cost :

| Outil actuel | Coût | Remplacé par | Nouveau coût |
|---|---|---|---|
| Klaviyo | 150 €/mois | n8n (self-hosted) | 15 €/mois (VPS) |
| Judge.me | 39 €/mois | n8n + NocoDB form | 0 € |
| Excel manuel | 2h/mois | NocoDB + webhook auto | 0 € |
| **Total** | **189 €/mois** | | **15 €/mois** |

**Stack retenue :**
- **n8n** (self-hosted sur VPS) — orchestrateur de tous les workflows automatisés
- **NocoDB** — dashboard ventes temps réel, collecte d'avis, CRM léger
- **Resend** — envoi d'emails transactionnels (gratuit jusqu'à 3 000/mois)

---

## 3. Phases de mise en place

### Phase 1 — Fondations Shopify (2 semaines)

**Objectif :** Comprendre et configurer les webhooks Shopify pour déclencher des automatisations à chaque commande payée.

**Ce qui est livré :**
- Documentation complète des webhooks Shopify disponibles
- Test webhook fonctionnel : une commande Shopify → réception des données vérifiée
- Cartographie des champs utiles (taille, couleur, set, client, localité)

**Coût :** 1 000 €
**ROI immédiat :** 0 € — c'est la fondation sans laquelle rien n'est possible.

---

### Phase 2 — APIs et NocoDB (1 semaine)

**Objectif :** Connecter n8n à NocoDB et valider la chaîne de données Shopify → base de données.

**Ce qui est livré :**
- NocoDB installé et configuré (tables : commandes, clients, tailles, avis)
- Premier workflow n8n fonctionnel : commande Shopify → ligne NocoDB créée automatiquement
- Vue tableau de bord basique consultable par l'équipe sans accès Shopify

**Coût :** 500 €
**ROI immédiat :** 0 € — fondation technique validée, prête pour la Phase 3.

---

### Phase 3 — Automation complète (2 semaines)

**Objectif :** Déployer l'ensemble des workflows qui remplacent Klaviyo, Judge.me et Excel.

**Ce qui est livré :**
- Dashboard NocoDB temps réel : ventes par taille, couleur, set, mois — consultable à tout moment
- Emails automatiques via Resend : confirmation commande, relance panier abandonné, remerciement J+1
- Collecte d'avis automatique : email J+7 après livraison → réponse stockée dans NocoDB
- Suppression des abonnements Klaviyo et Judge.me possible dès la mise en production

**Coût :** 1 500 €
**ROI dès le 1er mois :** +159 €/mois d'économies récurrentes (189 € - 30 €)

---

## 4. Coûts & ROI total

### Investissement

| Poste | Montant |
|---|---|
| Phase 1 — Fondations Shopify | 1 000 € |
| Phase 2 — APIs NocoDB | 500 € |
| Phase 3 — Automation complète | 1 500 € |
| **Setup total** | **3 000 €** |
| Maintenance mensuelle (suivi, mises à jour) | 150 €/mois |

### Économies

| | Avant | Après | Économie |
|---|---|---|---|
| Mensuel | 189 € | 30 € | **159 €/mois** |
| Annuel | 2 268 € | 360 € | **1 908 €/an** |

### Payback

- 3 000 € ÷ 159 €/mois = **19 mois**
- À partir du mois 20 : **159 €/mois d'économies nettes — indéfiniment**
- Sur 3 ans : économie totale **~3 500 €** après remboursement du setup

---

## 5. Timeline

| Semaine | Phase | Livrable |
|---|---|---|
| S1 – S2 | Phase 1 | Webhooks Shopify documentés et testés |
| S3 | Phase 2 | NocoDB connecté, premier workflow validé |
| S4 – S5 | Phase 3 | Automation complète en production |
| S6+ | Maintenance | Optimisations, alertes, nouveaux workflows |

---

## 6. Pourquoi cette stack plutôt qu'une autre

**NocoDB plutôt qu'Airtable**
Airtable facture 10–20 €/mois par utilisateur et impose des limites sur le nombre de lignes. NocoDB est open-source, self-hosted sur le même VPS que n8n, et gratuit. Pour stocker des commandes et des données de ventes, NocoDB fait exactement le même travail — sans abonnement.

**n8n plutôt que Zapier ou Make**
Zapier et Make facturent à l'exécution — plus les automatisations tournent, plus la facture monte. n8n self-hosted est illimité en exécutions pour un coût fixe de 15 €/mois de VPS. À mesure qu'ATTA Africa croît et que les commandes augmentent, le coût reste identique.

**Resend plutôt que Klaviyo pour le transactionnel**
Klaviyo est conçu pour le marketing à grande échelle. Pour les emails transactionnels (confirmation, relance, avis), Resend est plus simple, plus rapide à intégrer, et gratuit jusqu'à 3 000 emails/mois — ce qui couvre largement le volume actuel d'ATTA Africa.

**En résumé :** cette stack est taillée pour la taille et les besoins réels d'ATTA Africa aujourd'hui. Elle peut évoluer sans changer d'outil ni de fournisseur.

---

*Document préparé dans le cadre du programme AI Automation Specialist.*
