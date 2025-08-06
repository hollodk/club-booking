# Clubmaster Booking Plugin

The **Clubmaster Booking Plugin** allows you to easily embed a booking flow into any website.
It connects to the [Clubmaster API](https://app.clubmaster.org/api/v3/doc) and can be customized to fit your brand and business needs.

A live demo of the plugin is available here:
👉 [https://demo.optikpartner.dk/book-appointment/](https://demo.optikpartner.dk/book-appointment/)

---

## 🚀 Quick Start

### 1. Standalone Booking Page

Every plugin comes with its own public booking URL.
You can use this URL directly without any integration:

```
https://app.clubmaster.org/public/booking/{id}/
```

Replace `{id}` with your plugin's unique ID.

---

### 2. Embedding the Plugin in Your Website

Add this script to your page, replacing `id` with your plugin ID:

```html
<script>
  window.BW_WIDGET_CONFIG = {
    id: 62, // Required
    name: "Variant 3", // Optional, for identifying widget variant
    attributes: { color: "RED" }, // Optional, for custom attributes
  };

  const script = document.createElement("script");
  script.src = "https://cdn.beastscan.com/plugin/booking/plugin.js";
  document.head.appendChild(script);
</script>
```

Add a container element where you want the booking widget to appear:

```html
<div id="bw-widget"></div>
```

**Note:**

* The widget will automatically render inside the `#bw-widget` container.
* The plugin will follow the container’s width.
  For responsiveness, use `max-width` instead of fixed `width`.

---

## ⚙️ Customizing Plugin Behavior

The `window.BW_WIDGET_CONFIG` object allows you to customize how the plugin works.
You can set:

* **`id`** (required) – The plugin ID from your CRM system.
* **`name`** (optional) – A label for the plugin instance.
* **`attributes`** (optional) – Key/value pairs for customization (e.g., colors, variants).

---

## 📊 Tracking Events

You can track user interactions and send data to **Google Analytics**, **Google Tag Manager**, or any other analytics system.

### Example:

```js
window.BW_WIDGET_CONFIG = {
  id: 62,
  name: "Variant 3",
  attributes: { color: "RED" },

  trackEvents: {
    viewService: function () {
      return {
        plugin_name: "Hello",
      };
    },
    chooseService: function (summary) {
      return {
        friendly_name: summary.service.friendly_name,
      };
    },
    chooseLocation: function (summary) {
      return {
        created_at: summary.location.created_at,
        postcode: summary.location.postcode,
      };
    },
  },
};
```

**Notes:**

* Each `choose` event automatically sends `id` and `name` to analytics.
* The `summary` object contains additional data that you can map to custom analytics fields.

---

## 📦 Accessing the Booking Object

You can execute custom logic when a booking is confirmed by using the `onConfirm` callback:

```js
window.BW_WIDGET_CONFIG = {
  id: 62,
  name: "Variant 3",
  attributes: { color: "RED" },

  onConfirm(booking) {
    console.log("Booking confirmed:", booking);
    // You can send booking data to your CRM, analytics, or other systems here
  },
};
```

---

## 📊 Plugin Features

The Clubmaster Booking Plugin supports a wide range of customization and integration features through its configuration panel:

### 🌐 Identifier & Session Settings

* Set booking variant name and retention duration (e.g., 1 hour, 1 day, 1 month).

### 🛍️ Landing Page Content

* Customize landing page footer content using rich text (HTML allowed).

### ⚖️ General Settings

* Define menu summary and footer texts.
* Select your analytics provider: None, Google Analytics, or Google Tag Manager.
* Enable or disable auto-loading of tracking scripts.

### 🎨 UI & Theme Settings

* Set primary and text colors, background dimming levels.
* Customize icons, animations, font family, and border radius.
* Enable/disable display on mobile, tablet, desktop.
* Choose widget flow: by Service first or Location first.

### ✨ Popup Design

* Select a Bootstrap icon (clock, coffee, calendar, etc.) with custom text.
* Enable animation and different behaviors based on device type.

### ⚛️ Custom HTML Injection

* Inject custom HTML/JS into `<head>` or `<body>` for scripts, styles, or tracking codes.

### 🔄 Step Configuration

Each step in the booking flow is fully configurable:

* **Service**: multiple selection, auto-confirm, preselection, show price/duration, custom labels.
* **Location**: allow multiple, auto-confirm, preselection, custom labels.
* **Employee**: skip step, allow all employees, name formatting, preselection, labels.
* **Schedule**: customize labels for calendar view and selection buttons.
* **Submit**: fully define input fields like name, email, phone, address, notes, GDPR consent, etc.
* **Payment**: optionally skip step or define titles and CTA buttons.
* **Thank You Page**: add animations, custom messages, calendar links, and directions.

---

## 📚 API Documentation

For advanced use cases, refer to the [Clubmaster API Documentation](https://app.clubmaster.org/api/v3/doc).
The **public booking endpoints** describe the data and workflows used by this plugin.

---

## 📝 License

This plugin is part of the **Clubmaster** platform.
Use is subject to your service agreement and API terms.
