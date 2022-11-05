const express = require("express");

class gerenteController {
  async createGerente(request, response) {
    const data = request.body;

    // const gerenteExists = await gerentefind(data.email);

    return response.json(data);
  }
}

module.exports = new gerenteController();
