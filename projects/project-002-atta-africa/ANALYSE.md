# Analyse — Automatisation reporting ventes ATTA Africa

**Client :** ATTA Africa (marque fashion, e-commerce Shopify)
**Interlocuteur technique :** Amadou (dev/consultant interne)
**Date :** 23 mai 2026
**Objectif :** Automatiser le reporting ventes par taille, couleur et set — et activer la segmentation Klaviyo basée sur les achats réels

---

## 1. Processus actuel (manuel, chronophage)

Le flux de gestion post-commande repose sur un ensemble d'actions humaines dispersées entre deux opératrices (Anta et Fabinetou), un fichier Excel mis à jour manuellement, et une intégration Klaviyo sous-exploitée.

```
Commande reçue sur Shopify
        ↓
Anta ou Fabinetou traite la commande (quelques jours après réception)
        ↓  ⚡ Délai de traitement variable selon disponibilité
Validation manuelle de la commande dans Shopify
        ↓
Client reçoit sa commande selon délai de livraison par localité
        ↓
Amadou exporte les données Shopify en Excel (une fois par mois)
        ↓  ⚡ 2h de travail répétitif : nettoyage, tri, formules
Amadou consolide manuellement les sorties de tailles par SET et COULEUR
        ↓  ⚡ Risque d'erreur élevé — aucune vérification automatique
Klaviyo envoie des campagnes sans segmentation basée sur les tailles achetées
        ↓  ⚡ Opportunités de ciblage manquées
Avis clients collectés via Judge.me
        ↓  ⚡ Non corrélés aux données de ventes par produit
```

Chaque étape marquée ⚡ représente une friction qui coûte du temps, génère des erreurs ou laisse une opportunité marketing inexploitée.

---

## 2. Les 3 douleurs critiques

### Douleur #1 : 2 heures par mois perdues sur Excel

Chaque mois, Amadou consacre environ 2 heures à extraire les données Shopify, nettoyer le fichier, restructurer les colonnes, calculer les sorties de tailles par SET et par COULEUR, et produire un rapport lisible. Cette tâche est 100 % répétitive, sans valeur ajoutée, et comporte un risque d'erreur à chaque manipulation. À mesure que le catalogue et le volume de commandes augmentent, ce temps augmentera proportionnellement.

### Douleur #2 : Aucun dashboard temps réel

Il n'existe aucune vue en temps réel des ventes par taille, couleur ou set. Les décisions de réassort ou d'arbitrage de stock reposent sur des données vieilles de plusieurs semaines. Une taille qui s'écoule rapidement en début de mois n'est identifiable qu'en fin de mois — souvent trop tard pour réagir avant rupture.

### Douleur #3 : Segmentation Klaviyo inexploitée

Klaviyo est connecté à Shopify, mais les campagnes ne s'appuient pas sur les données d'achat réelles — en particulier les tailles et les sets achetés. Une cliente qui a acheté un set taille M en rouge ne reçoit pas de communication ciblée sur les nouveautés dans sa taille ou sa couleur préférée. Cette absence de personnalisation réduit les taux d'ouverture, de clic, et in fine le taux de réachat.

---

## 3. Processus cible (automatisé)

Le processus cible supprime toutes les manipulations Excel et alimente en temps réel un dashboard et les segments Klaviyo.

```
Commande confirmée sur Shopify
        ↓
✅ Webhook Shopify déclenche automatiquement le flux
        ↓
✅ Données commande (taille, couleur, set, client) envoyées vers Google Sheets ou Airtable
        ↓
✅ Dashboard mis à jour en temps réel : ventes par taille / couleur / set / mois
        ↓
✅ Propriétés client enrichies dans Klaviyo (taille achetée, couleur, set)
        ↓
✅ Segments Klaviyo actifs : "a acheté taille M", "fan des sets rouge", etc.
        ↓
✅ Campagnes et flows ciblés déclenchés automatiquement selon le profil d'achat
        ↓
Avis Judge.me collecté après livraison
        ↓
✅ Avis corrélé au produit/taille dans le dashboard pour analyse qualité
```

Résultat : zéro export Excel, rapport disponible à tout moment, segmentation Klaviyo active et personnalisée.

---

## 4. ROI estimé

### Temps récupéré

| Tâche automatisée | Temps actuel | Fréquence | Gain annuel |
|---|---|---|---|
| Export et nettoyage Excel | 1h | Mensuelle | 12 h/an |
| Consolidation tailles/couleurs | 1h | Mensuelle | 12 h/an |
| **Total** | **2h/mois** | | **24 h/an** |

Valorisé au tarif consultant junior (30 $/h) : **720 $/an récupérés** — plus significatif encore si ce temps est réinvesti sur des tâches à valeur ajoutée (stratégie, développement catalogue, CRO).

### Revenus supplémentaires (segmentation Klaviyo)

La segmentation fine par taille et couleur permet d'envoyer des campagnes ultra-pertinentes. Hypothèse conservative basée sur les benchmarks Klaviyo fashion :

- Taux d'ouverture segmenté vs générique : +20 à +35 %
- Impact sur le taux de réachat : +10 à +15 %
- Sur un CA email mensuel de 2 000 $ : **+200 à +300 $/mois**

### Investissement

| Poste | Coût estimé |
|---|---|
| Setup webhook + Google Sheets/Airtable | 800 – 1 200 $ |
| Configuration segmentation Klaviyo | 400 – 600 $ |
| Maintenance mensuelle | 50 – 100 $/mois |

**Retour sur investissement : 3 à 5 mois** (en comptant uniquement les gains email).

---

## 5. Architecture solution

```
Shopify (commandes confirmées)
        ↓  Webhook order/paid
n8n (orchestrateur)
        ↓                        ↓
Google Sheets ou Airtable    Klaviyo API
(dashboard ventes :          (enrichissement profil client :
 taille / couleur / set /     taille achetée, couleur,
 mois / localité)             set, fréquence d'achat)
        ↓
Rapport automatique
(vue temps réel, filtres,
 alertes stock bas par taille)
```

- **Shopify** : source de vérité des commandes, déjà en place
- **n8n** : orchestrateur, déclenché à chaque commande payée
- **Google Sheets ou Airtable** : dashboard ventes consultable par toute l'équipe, sans accès Shopify requis
- **Klaviyo API** : mise à jour des propriétés client pour segmentation dynamique
- **Judge.me** : intégrable en bonus pour corréler avis et données produit

---

## 6. Prochaines étapes

**Module 02 — Shopify moderne (webhooks)**
Configurer le webhook `order/paid` sur Shopify pour déclencher le flux à chaque commande confirmée. Valider le payload reçu : SKU, variante (taille/couleur), quantité, client.

**Module 03 — APIs & Webhooks**
Connecter l'API Klaviyo pour enrichir les profils clients. Définir les propriétés personnalisées : `taille_achetee`, `couleur_preferee`, `set_achete`. Tester les segments dynamiques.

**Module 04 — n8n automation (mise en place complète)**
Construire le workflow complet : réception webhook → écriture Google Sheets/Airtable → enrichissement Klaviyo → alerte optionnelle si taille proche de rupture. Déployer, tester sur données réelles, documenter.

---

*Analyse réalisée dans le cadre du programme AI Automation Specialist.*
*Prochaine révision prévue après Module 04.*
