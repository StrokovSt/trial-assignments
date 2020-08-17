export const social = () => {
  const socialContainer = document.querySelector(`.shirt-section__social-container`);

  socialContainer.classList.remove(`shirt-section__social-container--active`);

  socialContainer.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `H3`) {
      if (evt.target.parentNode.classList.contains(`shirt-section__social-container--active`)) {
        evt.target.parentNode.classList.remove(`shirt-section__social-container--active`);
      } else {
        evt.target.parentNode.classList.add(`shirt-section__social-container--active`);
      }
    }
  });
};
