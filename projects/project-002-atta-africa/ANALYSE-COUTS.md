# Automatisation ATTA Africa — Réduction coûts d'abonnement

**Client :** ATTA Africa (marque fashion, e-commerce Shopify)
**Interlocuteur :** Amadou (dev/consultant interne)
**Date :** 23 mai 2026
**Objectif :** Éliminer les abonnements SaaS redondants et remplacer le travail manuel par une stack open-source — sans dégrader les opérations

---

## 1. Situation actuelle : ce que ça coûte vraiment

Le stack actuel d'ATTA Africa fonctionne — mais il est surdimensionné pour le volume, et une partie du budget part sur des outils qui font doublon ou qui pourraient être remplacés à 95 % du coût.

| Outil | Usage | Coût mensuel |
|---|---|---|
| Klaviyo | Relances panier, emails post-achat, segmentation | 300 – 1 000 $ |
| Judge.me | Collecte et affichage d'avis clients | 50 $ |
| Excel (temps Amadou) | Export Shopify, consolidation ventes/tailles | 40 $/mois (2h × 20 $/h) |
| **Total** | | **390 – 1 090 $/mois** |

Le problème n'est pas que ces outils sont mauvais. Le problème est qu'à ce stade de développement d'ATTA Africa, ils coûtent entre 4 700 et 13 000 $ par an — pour des fonctionnalités qu'une stack open-source peut reproduire à 25–30 $/mois.

---

## 2. Les 3 coûts cachés

### Coût #1 : Klaviyo est tarifé pour des volumes que ATTA n'atteint pas encore

Klaviyo facture à la taille de la liste contacts, pas à la valeur générée. Pour une marque en croissance avec une liste de quelques milliers de contacts, les fonctionnalités avancées (segmentation prédictive, A/B testing, reporting) sont rarement exploitées à plein. Le résultat : ATTA paie pour un outil enterprise alors qu'un outil d'automatisation self-hosted couvrirait 90 % des besoins (relances panier, remerciement commande, segmentation par comportement d'achat) pour 15 $/mois de VPS.

### Coût #2 : Judge.me est redondant si un CRM est en place

Judge.me facture 50 $/mois pour collecter et afficher des avis. Or, un formulaire Airtable ou une séquence n8n déclenche exactement le même flux — email automatique J+7 après livraison, collecte de la réponse, stockage. L'affichage sur le site peut être géré avec une intégration légère ou un widget natif Shopify sans abonnement. 50 $/mois pour un formulaire d'avis, c'est 600 $/an sur une fonction remplaçable en quelques heures de setup.

### Coût #3 : 2h Excel par mois, c'est 24h par an de travail à zéro valeur ajoutée

Chaque mois, Amadou exporte Shopify en Excel, nettoie les données, consolide les sorties de tailles par SET et COULEUR, et produit un rapport. Ce travail est 100 % automatisable via un webhook Shopify qui alimente un Google Sheet en temps réel. Le gain n'est pas seulement les 40 $/mois de temps — c'est aussi la fiabilité : un dashboard automatique ne fait pas d'erreur de formule à 23h un dimanche.

---

## 3. Solution cible : stack open-source à 25–30 $/mois

L'objectif n'est pas d'ajouter de l'automatisation. C'est d'éliminer des coûts tout en maintenant — voire en améliorant — le niveau de service.

```
AVANT                          APRÈS
------                         -----
Klaviyo (300–1000$/mois)   →   n8n self-hosted (15$/mois VPS)
Judge.me (50$/mois)        →   n8n + Airtable form (0$)
Excel manuel (40$/mois)    →   Google Sheets auto (0$)
------                         -----
Total : 390–1090$/mois         Total : 15–30$/mois
```

### n8n self-hosted — remplace Klaviyo

Hébergé sur un VPS à 10–20 $/mois, n8n recrée les workflows Klaviyo essentiels :

- Relance panier abandonné (J+1, J+3)
- Email de confirmation et remerciement commande
- Segmentation par taille achetée, couleur, set — via propriétés client enrichies
- Relance réachat à J+30 pour les clients inactifs

L'envoi passe par Resend (gratuit jusqu'à 100 emails/jour, puis 20 $/mois pour 50 000 emails) — délivrabilité professionnelle, sans surcoût.

### Google Sheets ou Airtable — remplace Excel

Un webhook Shopify déclenché à chaque commande payée alimente automatiquement un Google Sheet : taille, couleur, set, quantité, localité, date. Le dashboard est disponible en temps réel, sans export, sans formules manuelles, consultable par toute l'équipe.

### Collecte d'avis — remplace Judge.me

Un workflow n8n déclenche un email automatique J+7 après livraison avec un lien vers un formulaire Airtable ou Google Forms. Les réponses sont centralisées et corrélées aux commandes. L'affichage sur le site Shopify peut être géré via une app native gratuite ou un snippet personnalisé.

---

## 4. ROI détaillé

### Coûts actuels (confirmés)

| Outil | Coût mensuel | Coût annuel |
|---|---|---|
| Klaviyo | 150 € | 1 800 € |
| Judge.me | 39 € | 468 € |
| **Total** | **189 €/mois** | **2 268 €/an** |

### Nouveau coût de la stack proposée

| Outil | Coût mensuel | Coût annuel |
|---|---|---|
| n8n (VPS Hetzner) | 15 € | 180 € |
| Airtable | 15 € | 180 € |
| Resend | 0 € | 0 € |
| **Total** | **30 €/mois** | **360 €/an** |

### Économie directe

| | Avant | Après | Économie |
|---|---|---|---|
| Mensuel | 189 € | 30 € | **159 €/mois** |
| Annuel | 2 268 € | 360 € | **1 908 €/an** |

### Investissement

| Poste | Coût |
|---|---|
| Setup complet (n8n, workflows, dashboard, collecte avis) | 1 500 – 2 000 € |
| Maintenance mensuelle | 150 €/mois |

### Payback

- Économie mensuelle récurrente : **159 €**
- Retour sur investissement : **10 mois**
- Après payback : **159 €/mois d'économies nettes**, soit **1 908 €/an récupérés**

C'est l'argument #1 : la migration se rembourse en moins d'un an, puis ATTA Africa récupère 1 908 €/an indéfiniment.

---

## 5. Architecture : stack open-source

```
Shopify (commandes, paniers abandonnés)
        ↓  Webhooks (order/paid, checkout/abandoned)
n8n — self-hosted VPS (15$/mois)
        ↓                    ↓                   ↓
Google Sheets           Resend API           Airtable
(dashboard ventes :     (emails :            (collecte avis,
 taille/couleur/set/     confirmation,        CRM clients,
 mois — temps réel)      relance panier,      segments)
                         réachat J+30)
```

- **Shopify** : point d'entrée, webhooks natifs disponibles sans développement
- **n8n** : cerveau de l'automatisation, remplace Klaviyo pour les workflows essentiels
- **Resend** : délivrabilité email professionnelle, gratuit jusqu'à 3 000 emails/mois
- **Google Sheets** : dashboard ventes en temps réel, sans accès Shopify requis
- **Airtable** : CRM léger, collecte d'avis, historique clients

---

## 6. Prochaines étapes

**Module 02 — Shopify API + Webhooks**
Identifier et configurer les webhooks critiques : `order/paid` (dashboard + confirmation), `checkout/abandoned` (relance panier). Valider les payloads reçus.

**Module 03 — n8n self-hosted setup**
Déployer n8n sur un VPS Hetzner (CX11, 4 $/mois). Connecter Resend. Tester les premiers workflows en environnement isolé avant migration.

**Module 04 — Workflows automation (remplacement Klaviyo)**
Construire et valider les 4 workflows prioritaires : confirmation commande, relance panier abandonné, dashboard ventes Sheets, collecte avis. Monitorer la délivrabilité Resend vs Klaviyo sur 30 jours avant coupure définitive.

---

*Analyse réalisée dans le cadre du programme AI Automation Specialist.*
*Décision de migration à valider avec ATTA Africa après Module 03.*
