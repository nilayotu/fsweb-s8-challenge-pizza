describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })

it('belirtilen kelimeyi içermeli', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("French fries")
})

it('acıktım butonu bulundurmalı', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('ACIKTIM')
  })

  it('sipariş butonu bulundurmalı', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('SİPARİŞ VER')
  })

  describe("Sipariş Formu Doğrulama Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis");
  });

  it("Ad soyad 3 karakterden kısa girildiğinde hata gösterilir", () => {
    cy.get('input[placeholder*="ad soyad"]').type("Ni");
    cy.contains("En az 3 karakter giriniz.").should("be.visible");
  });
})

})
