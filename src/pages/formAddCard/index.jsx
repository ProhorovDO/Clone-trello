import React from 'react';
import { useState } from 'react';
import { useMessage } from '../../hooks/message.hook';

const FormAddCard = ({ onClickAddList, columnIndex }) => {
  const [openForm, setOpenForm] = useState(false);

  const [card, setCard] = useState(null);

  const message = useMessage();

  const handleITeaxAreaText = (e) => {
    setCard(e.target.value);
  };

  const onclickAddItem = (card, columnIndex) => {
    if (card === null) {
      message('Введите название карточки');
    } else {
      onClickAddList(card, columnIndex);
      setOpenForm(false);
      setCard(null);
    }
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setCard({
      card: null,
    });
  };
  return (
    <React.Fragment>
      {!openForm ? (
        <div className="column-form__button-addcard center">
          <i className="material-icons left">add</i>
          <span onClick={() => setOpenForm(true)}>Добавить карточку</span>
        </div>
      ) : (
        <div className="column-form">
          <textarea
            columnIndex="description"
            className="column-form__textarea"
            name="text"
            placeholder="Введите название карточки"
            onChange={handleITeaxAreaText}
          />
          <div className="column-form__button">
            <button
              className="waves-effect waves-light btn teal lighten-1"
              onClick={() => onclickAddItem(card, columnIndex)}
            >
              <i className="material-icons left ">add</i> Добавить карточку
            </button>
            <i
              className="material-icons right close"
              onClick={() => handleCloseForm()}
            >
              close
            </i>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default FormAddCard;
