# Analyse — Automatisation des commandes Fraîs'n

**Client :** Fraîs'n (supermarché en ligne, Dakar)
**Date :** 23 mai 2026
**Objectif :** Automatiser le flux commande → notification → livraison → suivi

---

## 1. Processus actuel (manuel, douloureux)

Le flux de commande repose aujourd'hui sur une chaîne d'actions humaines entièrement manuelles, réalisées par une seule personne — le webmaster — qui cumule les rôles de réceptionniste, coordinateur logistique et service client.

```
Client passe commande sur le site (WooCommerce)
        ↓
Webmaster reçoit l'alerte sur le dashboard WordPress
        ↓  ⚡ Dépendance totale à une personne
Webmaster copie les infos commande sur WhatsApp
        ↓  ⚡ Risque d'erreur ou d'oubli
Webmaster appelle ou écrit au livreur
        ↓  ⚡ Délai variable selon disponibilité
Livreur confirme (ou non) sa prise en charge
        ↓
Webmaster envoie un mail ou WhatsApp de confirmation au client
        ↓  ⚡ Souvent oublié si volume élevé
Livraison effectuée — paiement cash à la porte
        ↓  ⚡ Paiement non tracé, aucune preuve
Aucun suivi post-livraison
        ↓  ⚡ Client disparu dans la nature
```

Chaque étape marquée ⚡ représente un point de friction où le temps est perdu, où une erreur peut survenir, ou où une opportunité de fidélisation est manquée.

---

## 2. Les 4 douleurs critiques

### Douleur #1 : Goulot d'étranglement humain unique

L'ensemble du flux repose sur le webmaster. Si cette personne est occupée, absente ou surchargée, les commandes s'accumulent sans traitement. Chaque commande mobilise entre 10 et 20 minutes de travail manuel : lecture du dashboard, copie des données, appel livreur, envoi de confirmation. À 15 commandes par jour, cela représente 2 h 30 à 5 h de travail répétitif quotidien sur une seule personne.

### Douleur #2 : Risque de rupture de stock invisible

La mise à jour des stocks se fait manuellement, après livraison. Il n'existe aucune synchronisation automatique entre les ventes enregistrées et le catalogue produits. Résultat : un client peut commander un produit épuisé, passer à la caisse mentalement, et découvrir à la livraison que l'article est absent. Ce type d'incident crée de la méfiance et réduit les chances de recommande.

### Douleur #3 : Zéro fidélisation post-livraison

Une fois la livraison effectuée, le client n'a plus aucun contact avec Fraîs'n. Pas de message de remerciement, pas de demande d'avis, pas de relance promotionnelle, pas de rappel de commande. Dans un secteur où le réachat régulier est le modèle économique naturel (alimentation), l'absence totale de suivi signifie que chaque client est potentiellement perdu après sa première commande.

### Douleur #4 : Paiement à la livraison non tracé

Le paiement s'effectue en cash, directement auprès du livreur, sans confirmation numérique. Il n'existe aucune trace automatique du règlement : ni dans WordPress, ni dans un CRM, ni dans un tableur. En cas de litige, de vol ou d'erreur, la réconciliation est impossible. Cette absence de traçabilité complique également tout reporting financier ou analyse des ventes.

---

## 3. Processus cible (automatisé)

Le processus automatisé supprime les actions manuelles répétitives et libère le webmaster pour des tâches à valeur ajoutée : gestion fournisseurs, développement du catalogue, relation client stratégique.

```
Client passe commande sur le site (WooCommerce)
        ↓
✅ Webhook déclenche automatiquement n8n
        ↓
✅ Données commande enregistrées dans Airtable (CRM)
        ↓
✅ Message WhatsApp automatique envoyé au livreur assigné
        ↓
✅ Email/WhatsApp de confirmation envoyé au client (< 2 min)
        ↓
✅ Stock mis à jour en temps réel dans WooCommerce
        ↓
Livraison effectuée — livreur confirme via formulaire ou message
        ↓
✅ Commande marquée "livrée" dans Airtable
        ↓
✅ Message de remerciement + demande d'avis envoyé au client (J+1)
        ↓
✅ Relance promotionnelle automatique à J+7 si pas de nouvelle commande
```

Chaque étape ✅ est déclenchée automatiquement, sans intervention humaine, 24h/24 et 7j/7.

---

## 4. ROI estimé

### Temps récupéré

| Tâche automatisée | Temps actuel | Fréquence | Gain mensuel |
|---|---|---|---|
| Lecture et copie commande | 5 min | 15/jour | 37,5 h/mois |
| Notification livreur | 5 min | 15/jour | 37,5 h/mois |
| Confirmation client | 3 min | 15/jour | 22,5 h/mois |
| Mise à jour stock | 5 min | 15/jour | 37,5 h/mois |
| **Total** | | | **135 h/mois** |

Valorisé à 10 $/h (tarif assistant administratif local) : **1 350 $/mois de travail libéré.**

### Revenus supplémentaires (fidélisation)

Le suivi automatisé post-livraison génère des commandes récurrentes que le processus actuel laisse filer. Hypothèse conservative : +15 % de taux de réachat grâce aux relances automatisées.

- Chiffre d'affaires mensuel estimé actuel : 6 000 $
- Gain fidélisation (+15 %) : **+900 $/mois**

### Investissement

| Poste | Coût |
|---|---|
| Analyse et conception | Inclus dans l'accompagnement |
| Setup technique (n8n, intégrations) | 1 500 – 2 000 $ |
| Maintenance mensuelle | 150 – 200 $/mois |

**Retour sur investissement : 2 à 3 mois.**

---

## 5. Architecture solution

La solution repose sur des outils éprouvés, sans développement sur mesure coûteux :

```
WooCommerce (commandes)
        ↓  Webhook
n8n (orchestrateur d'automatisation)
        ↓          ↓               ↓
Airtable       WhatsApp API    Resend
(CRM/suivi)    (livreur +      (confirmations
                client)         + relances)
        ↓
WooCommerce (mise à jour stock en retour)
```

- **WooCommerce** : point d'entrée des commandes, déjà en place
- **n8n** : cerveau de l'automatisation, hébergeable localement ou en cloud
- **Airtable** : base de données client et suivi des commandes
- **WhatsApp Business API** : canal de communication principal (Dakar)
- **Resend** : confirmations et relances email
  - Resend API pour emails transactionnels
  - Templates : confirmation commande, relance J+3

---

## 6. Prochaines étapes

L'implémentation se déroule en trois modules progressifs, chacun apportant une valeur immédiate avant de passer au suivant.

**Module 02 — WordPress moderne (webhooks)**
Configurer WooCommerce pour émettre des webhooks à chaque nouvelle commande. C'est le point de départ technique de toute l'automatisation.

**Module 03 — APIs & Webhooks**
Connecter les APIs WhatsApp Business et Gmail. Tester les payloads, valider les confirmations automatiques côté client et livreur.

**Module 04 — n8n automation (mise en place complète)**
Construire les workflows n8n : réception commande → notification livreur → confirmation client → mise à jour stock → suivi post-livraison. Déployer et monitorer en production.

---

*Analyse réalisée dans le cadre du programme AI Automation Specialist.*
*Prochaine révision prévue après Module 04.*
