export const model = {
    products: [
      { id: 'Ticket-01', name: 'Blackpink concert ticket', price: 79000, quantity: 1 },
      { id: 'Ticket-02', name: 'MVC ticket', price: 3000, quantity: 200 },
      { id: 'Ticket-03', name: 'Avenger: Endgame ticket', price: 1500, quantity: 68 },
      { id: 'Project-A', name: 'Bridge bar voucher', price: 10000, quantity: 100 },
      { id: 'Project-F', name: 'Brain junior', price: 50, quantity: 650 },
      { id: '10062', name: 'Member A Class', price: 899, quantity: 2 },
      { id: '10063', name: 'Member B Class', price: 699, quantity: 15 }
    ],
    sort(key) {
      this.products.sort((a, b) => a[key] - b[key]);
    }
  };
  