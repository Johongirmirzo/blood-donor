import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Formik, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateOurAchievements } from "../../../../../redux/about-page";
import { updateOurAchievements as editOurAchievements } from "../../../../../api/about-page";
import achievementsSchema from "../../../../../schemas/achievementsSchema";
import { IOurAchievements } from "../../../../../types/about-us-page";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/UI/Alert/index.styled";
import {
  OurAchievementsInputBox,
  OurAchievementsDeleteBtn,
  OurAchievementsAddBtn,
} from "./index.styled";

const AchievementsForm = () => {
  const dispatch = useDispatch();
  const ourAchievements = useSelector(
    (state: RootState) => state.aboutUsPage.ourAchievements
  );

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateOurAchievementsSubmit = async (
    ourAchievementsData: IOurAchievements
  ) => {
    try {
      setIsLoading(true);
      const bloodGroupInfoResponse = await editOurAchievements(
        ourAchievementsData
      );
      console.log("response", bloodGroupInfoResponse.data);
      setIsLoading(false);
      dispatch(
        updateOurAchievements({
          ourAchievements: { ...bloodGroupInfoResponse.data },
        })
      );
      setError(["Our achievements is updated successfully!"]);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      console.error(err.response);
      setError(["Please provide valid data!"]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(1, ourAchievements);
  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert success={isUpdateSuccessfull}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      {true && (
        <Formik
          initialValues={{
            title: ourAchievements.title,
            description: ourAchievements.description,
            achievementList: ourAchievements.achievementList.length
              ? ourAchievements.achievementList
              : [{ title: "", result: 0 }],
          }}
          onSubmit={(ourAchievementsData) => {
            console.log(ourAchievementsData);
            if (ourAchievementsData.achievementList.length < 4) {
              setError(["Please provide at least 5 info lists"]);
              setIsUpdateSuccessfull(false);
            } else if (ourAchievementsData.achievementList.length > 25) {
              setError(["Maximum allowed info list amount is 25"]);
              setIsUpdateSuccessfull(false);
            } else {
              handleUpdateOurAchievementsSubmit(ourAchievementsData);
            }
          }}
          validationSchema={achievementsSchema}
        >
          {({ handleSubmit, handleChange, errors, touched, values }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <FormInput
                  type="text"
                  id="title"
                  placeholder="Enter Title"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                />
                {errors.title && touched.title ? (
                  <FormFieldError>{errors.title}</FormFieldError>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormInput
                  type="text"
                  id="description"
                  placeholder="Enter Title"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                />
                {errors.description && touched.description ? (
                  <FormFieldError>{errors.description}</FormFieldError>
                ) : null}
              </FormControl>

              <FormControl>
                <FieldArray name="achievementList">
                  {({ insert, push, remove }) => (
                    <div>
                      <FormLabel>Achievement List</FormLabel>
                      {values.achievementList.map((achievementItem, index) => (
                        <React.Fragment key={index}>
                          <OurAchievementsInputBox key={index}>
                            <FormInput
                              type="text"
                              placeholder="Enter Achievement Title"
                              name={`achievementList.${index}.title`}
                              value={achievementItem.title}
                              onChange={handleChange}
                            />
                            <FormInput
                              type="number"
                              placeholder="Enter Achievement Amount"
                              name={`achievementList.${index}.result`}
                              min="1"
                              max="1000000"
                              value={achievementItem.result}
                              onChange={handleChange}
                            />
                            <OurAchievementsDeleteBtn
                              type="button"
                              onClick={() => remove(index)}
                            >
                              <RiDeleteBinLine />
                            </OurAchievementsDeleteBtn>
                          </OurAchievementsInputBox>
                        </React.Fragment>
                      ))}
                      <OurAchievementsAddBtn
                        type="button"
                        onClick={() => push({ title: "", result: 0 })}
                      >
                        + Add New Achievement
                      </OurAchievementsAddBtn>
                    </div>
                  )}
                </FieldArray>
              </FormControl>
              <FormButton
                type="submit"
                isLoading={isLoading ? true : false}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Updating Achievement..." : "Update Achievement"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default AchievementsForm;
