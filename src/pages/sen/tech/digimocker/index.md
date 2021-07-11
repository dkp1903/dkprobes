---
title: Digimocker - an alternative to Digilocker's API
date: "2021-07-11T22:40:32.169Z"
description: Digimocker - a free and open service made using Node-MongoDB to emulate the functionality of the restricted Digilocker API
tags: ["tech"]

---

Digilocker is an application powered by the Govt of India to allow citizens to store documents like Aadhar, Driving License etc in a digital format. The application has an API for third party applications to access a person's documents for use cases like KYC verification, but that API is restricted only to a select set of organizations associated with Digilocker, called requesters. 

Digimocker mocks the core functionalities of the Digilocker API - including options for a user to save, retrieve and modify her/his document details. It has made with the fields and structure similar to Digilocker's original API to ensure consistency

The tech stack includes Node-Express, MongoDB and Docker, but is being converted into a microservice implementation, expanded to include Spring-Postgres and Kafka.