import React from "react";

import styles from "./MemeForm.module.css";
import PropTypes from "prop-types";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { ACTIONS_CURRENT, store } from "../../../store/store";
import { connect, useDispatch } from "react-redux";
import Button from "../Button/Button";

interface IMemeFormProps {
  images: Array<IImage>;
  meme: IMeme;
  onFormChange: Function;
  onFormSubmit: Function;
  onFormReset: Function;
}
const MemeForm: React.FunctionComponent<IMemeFormProps> = (props) => {
  // const dispatch=useDispatch();
  function onTextChange(
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const assembledResult = {};
    assembledResult[evt.target.name] = evt.target.value;
    props.onFormChange(assembledResult);
  }
  function onNumberChange(
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const assembledResult = {};
    assembledResult[evt.target.name] = Number(evt.target.value);
    props.onFormChange(assembledResult);
  }
  function onCheckedChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const assembledResult = {};
    assembledResult[evt.target.name] = Number(evt.target.checked);
    props.onFormChange(assembledResult);
  }

  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form
        onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          props.onFormSubmit();
        }}
        onReset={(evt: React.FormEvent<HTMLFormElement>) => {
          props.onFormReset();
        }}
      >
        <div>
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            name="titre"
            placeholder="saisir titre"
            value={props.meme.titre}
            onChange={onTextChange}
          />
          <hr />
          <h2>Image</h2>
          <select
            name="imageId"
            value={props.meme.imageId}
            onChange={onNumberChange}
          >
            <option value="-1">Aucune</option>
            {props.images.map((e: IImage, i: number) => {
              return (
                <option key={`opt-${i}`} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <hr />
          <h2>text</h2>
          <input
            name="text"
            type="text"
            value={props.meme.text}
            onChange={onTextChange}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                name="x"
                className={styles.smallInput}
                value={props.meme.x}
                onChange={onNumberChange}
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                name="y"
                className={styles.smallInput}
                value={props.meme.y}
                onChange={onNumberChange}
              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            type="color"
            name="color"
            id="f_color"
            value={props.meme.color}
            onChange={onTextChange}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                name="fontSize"
                className={styles.smallInput}
                min={0}
                value={props.meme.fontSize}
                onChange={onNumberChange}
              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                name="fontWeight"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.fontWeight}
                onChange={onTextChange}
              />
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                name="underline"
                id="f_underline"
                type="checkbox"
                checked={props.meme.underline}
                onChange={onCheckedChange}
              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                name="italic"
                id="f_italic"
                type="checkbox"
                checked={props.meme.italic}
                onChange={onCheckedChange}
              />
            </div>
          </div>
          <div className={styles.half}>
            <Button type="reset" bgColor="tomato">
              Reinit
            </Button>
            <Button type="submit" bgColor="skyblue">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

function mstp(state, ownprops) {
  return {
    ...ownprops,
    images: state.ressources.images,
    meme: state.current,
  };
}
function mdtp(dispatch: Function) {
  return {
    onFormChange: (objt: any) => {
      dispatch({ type: ACTIONS_CURRENT.UPDATE_MEME, value: objt });
    },
    onFormSubmit: () => {
      dispatch({ type: ACTIONS_CURRENT.SAVE_MEME });
    },
    onFormReset: () => {
      dispatch({ type: ACTIONS_CURRENT.CLEAR_CURRENT });
    },
  };
}
export const ConnectedMemeForm = connect(mstp, mdtp)(MemeForm);
export default MemeForm;
