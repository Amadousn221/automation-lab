# WooCommerce Webhook Payload — Fraîs'n

**Plateforme :** WooCommerce (Fraîs'n.shop)
**Événement :** `order.created` (Nouvelle commande)
**Date capture :** 24 mai 2026
**Commande test :** #14149

---

## 📊 STRUCTURE COMPLÈTE DU PAYLOAD

```json
{
  "id": 14149,
  "parent_id": 0,
  "number": "14149",
  "order_key": "wc_order_xyz",
  "created_via": "checkout",
  "version": "8.7.0",
  "status": "pending",
  "currency": "XOF",
  "date_created": "2026-05-24T11:16:01",
  "date_modified": "2026-05-24T11:16:01",
  "discount_total": "0.00",
  "discount_tax": "0.00",
  "shipping_total": "0.00",
  "shipping_tax": "0.00",
  "cart_tax": "0.00",
  "total": "20600.00",
  "total_tax": "0.00",
  
  "payment_method": "cod",
  "payment_method_title": "Paiement à la livraison",
  
  "transaction_id": "",
  "customer_ip_address": "203.0.113.45",
  "customer_user_agent": "Mozilla/5.0...",
  "customer_note": "",
  
  "billing": {
    "first_name": "Test",
    "last_name": "nom",
    "company": "",
    "address_1": "g49 scat urbam",
    "address_2": "",
    "city": "Dakar",
    "state": "Dakar",
    "postcode": "",
    "country": "SN",
    "email": "test@test.com",
    "phone": ""
  },
  
  "shipping": {
    "first_name": "Test",
    "last_name": "nom",
    "company": "",
    "address_1": "g49 scat urbam",
    "address_2": "",
    "city": "Dakar",
    "state": "Dakar",
    "postcode": "",
    "country": "SN"
  },
  
  "line_items": [
    {
      "id": 34,
      "name": "Fajitas EPICE",
      "product_id": 43,
      "variation_id": 0,
      "quantity": 10,
      "tax_class": "",
      "subtotal": "20600.00",
      "subtotal_tax": "0.00",
      "total": "20600.00",
      "total_tax": "0.00",
      "taxes": [],
      "meta_data": []
    }
  ],
  
  "tax_lines": [],
  "shipping_lines": [],
  "fee_lines": [],
  "coupon_lines": [],
  
  "refunds": [],
  "payment_url": "",
  "is_editable": false,
  "needs_payment": true,
  "needs_processing": true,
  
  "date_paid": null,
  "date_completed": null,
  
  "customer_id": 0,
  "order_comments": [],
  
  "_links": {
    "self": [ { "href": "https://fraisn.shop/wp-json/wc/v3/orders/14149" } ],
    "collection": [ { "href": "https://fraisn.shop/wp-json/wc/v3/orders" } ]
  }
}
```

---

## 🔑 CHAMPS CLÉS À EXPLOITER

### Identification
| Champ | Valeur | Utilité |
|-------|--------|---------|
| `id` | 14149 | ID unique de la commande (utiliser comme référence) |
| `number` | "14149" | Numéro de commande (afficher au client) |
| `order_key` | Clé unique | Vérifier l'authenticité |
| `status` | "pending" | État (pending, processing, completed, cancelled) |
| `created_via` | "checkout" | Source (checkout, admin, api) |

### Client
| Champ | Valeur | Utilité |
|-------|--------|---------|
| `customer_email` | test@test.com | Envoyer confirmation/relance |
| `customer_id` | 0 | Utilisateur (0 = client anonyme) |
| `billing.phone` | "" | Envoyer SMS/WhatsApp |
| `customer_ip_address` | 203.0.113.45 | Détection fraude |

### Finances
| Champ | Valeur | Utilité |
|-------|--------|---------|
| `total` | "20600.00" | Montant total (alimenter comptabilité) |
| `payment_method` | "cod" | Moyen de paiement (cod=espèces, stripe=carte) |
| `needs_payment` | true | Attente de paiement ? |
| `date_paid` | null | Quand a-t-on reçu le paiement ? |

### Produits
| Champ | Valeur | Utilité |
|-------|--------|---------|
| `line_items[0].name` | "Fajitas EPICE" | Quel produit ? |
| `line_items[0].quantity` | 10 | Combien ? |
| `line_items[0].product_id` | 43 | ID produit (pour stock) |
| `line_items[0].total` | "20600.00" | Prix ligne |

### Adresses
| Champ | Valeur | Utilité |
|-------|--------|---------|
| `billing.*` | {...} | Adresse facturation |
| `shipping.*` | {...} | Adresse livraison (planifier logistique) |

### États importants
| Champ | Valeur | Utilité |
|-------|--------|---------|
| `needs_payment` | true | Commande attend paiement ? |
| `needs_processing` | true | Commande à traiter ? |
| `is_editable` | false | Peux-on modifier la commande ? |

---

## 🎯 CAS D'USAGE D'AUTOMATISATION

### Cas 1 : Notification client
```
À chaque webhook "order.created" :
1. Récupère : customer_email, order_number, line_items, total
2. Envoie email : "Commande #{14149} reçue — Montant : 20.600 CFA"
3. Marque dans Airtable : status = "Client notifié"
```

### Cas 2 : Notification livreur
```
À chaque webhook "order.created" :
1. Récupère : shipping.address_1, line_items, customer_id
2. Envoie WhatsApp au livreur :
   "📦 Nouvelle commande #14149
    📍 g49 scat urbam, Dakar
    📦 Fajitas EPICE x10
    💰 20.600 CFA"
3. Crée une ligne dans NocoDB : status = "Attente livreur"
```

### Cas 3 : Mise à jour stocks
```
À chaque webhook "order.created" :
1. Pour chaque produit dans line_items :
   product_id = 43, quantity = 10
2. Appelle API WooCommerce : 
   stock(product_43) = stock(product_43) - 10
3. Si stock < 5 : alerte admin
```

### Cas 4 : Comptabilité automatique
```
À chaque webhook "order.created" :
1. Crée ligne Google Sheets :
   Date | Commande | Client | Montant | Produits | Statut
   2026-05-24 | 14149 | test@test.com | 20600 | Fajitas x10 | pending
2. Colonne "Statut paiement" : formula = IF(needs_payment, "Attente", "Payé")
3. Somme quotidienne auto-calculée
```

### Cas 5 : Relance client
```
À chaque webhook "order.created" :
1. Stocke : order_id, customer_email, status
2. Schedule automation : 
   - J+1 : "Vous avez oublié quelque chose ?"
   - J+3 : "-20% sur votre prochaine commande"
   - J+7 : "Promo spéciale clients réguliers"
```

---

## 🛠️ IMPLÉMENTATION (Avec n8n)

### Flow n8n simplifié
```
[WooCommerce Webhook Trigger]
        ↓
[Receive: order.created]
        ↓
[Parse JSON]
        ↓
[Extract fields]
├─ order_id → $json.id
├─ customer_email → $json.billing.email
├─ total → $json.total
├─ products → $json.line_items[]
└─ address → $json.shipping.address_1
        ↓
[Branch on status]
├─ IF status = "pending" → Send Email
├─ IF status = "processing" → Send WhatsApp
└─ IF status = "completed" → Create Invoice
        ↓
[Log to Airtable/Google Sheets]
        ↓
[End]
```

---

## 📋 CHAMPS PAR CAS D'USAGE

**Pour Email** :
- `billing.email`
- `order_number`
- `total`
- `line_items[].name`

**Pour WhatsApp** :
- `shipping.address_1`
- `shipping.city`
- `customer_phone`
- `line_items[].quantity`
- `total`

**Pour Comptabilité** :
- `created_via`
- `total`
- `payment_method`
- `status`
- `line_items[].product_id`
- `line_items[].quantity`

**Pour Logistique** :
- `shipping.*` (adresse complète)
- `customer_id`
- `line_items` (poids, volume)
- `date_created`

---

## ✅ VALIDATION PAYLOAD

**Champs à toujours vérifier :**
```javascript
// Avant de traiter
if (!payload.id) throw "Missing order ID";
if (!payload.billing.email) throw "Missing email";
if (!payload.line_items || payload.line_items.length === 0) throw "No products";
if (parseFloat(payload.total) <= 0) throw "Invalid total";

// C'est bon, on peut procéder
console.log("✅ Payload valide");
```

---

## 🔗 RESSOURCES

- [WooCommerce REST API - Orders](https://woocommerce.github.io/woocommerce-rest-api-docs/?shell#orders)
- [WooCommerce Webhooks Documentation](https://woocommerce.com/document/webhooks/)
- [n8n WooCommerce Integration](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/)

---

## 📌 NOTES

- **Timezone :** UTC+0 (Dakar)
- **Devise :** XOF (Franc CFA sénégalais)
- **Méthode paiement par défaut :** COD (paiement à la livraison)
- **Version API :** WP REST API v3

**Test réalisé le :** 24 mai 2026
**Environnement :** Production (fraisn.shop)
**Validité :** ✅ Webhook fonctionne parfaitement

