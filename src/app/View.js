export class View {
  login() {
    window.location.href = '../../public/main.html';
  }

  logout() {
    window.location.href = '../../public/auth.html';
  }

  buildServiceRecord(item) {
    const list = document.querySelector('.service_list');

    const elementList = document.createElement('li');
    const wrapper = document.createElement('div');
    const elementTitle = document.createElement('div');
    const elementCount = document.createElement('div');
    const elementPrice = document.createElement('div');
    const span = document.createElement('span');

    elementTitle.innerText = item.title;
    elementCount.innerText = item.amount;
    elementPrice.innerText = item.price;

    wrapper.setAttribute('class', 'element_wrapper');
    wrapper.setAttribute('id', item.id);
    elementTitle.setAttribute('class', 'element_title');
    elementCount.setAttribute('class', 'element_count');
    elementPrice.setAttribute('class', 'element_price');

    [elementTitle, elementCount, elementPrice].forEach(el => {
      wrapper.appendChild(el);
    });
    elementList.appendChild(wrapper);
    list.appendChild(elementList);
  }
}
