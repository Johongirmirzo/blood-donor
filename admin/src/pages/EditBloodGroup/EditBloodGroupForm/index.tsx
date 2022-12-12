import React, { useState, useEffect } from "react";
import { Button } from "../../../styles/UI/Button/index.styled";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { editBloodGroup as updateBloodGroup } from "../../../redux/blood-group";
import bloodGroupSchema from "../../../schemas/bloodGroupSchema";
import { editBloodGroup } from "../../../api/blood-group";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";

const EditBloodGroup = () => {
  const dispatch = useDispatch();
  const bloodGroups = useSelector(
    (state: RootState) => state.bloodGroup.bloodGroups
  );
  const navigate = useNavigate();
  const { bloodGroupId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);
  const [bloodType, setBloodType] = useState("");

  useEffect(() => {
    if (bloodGroupId) {
      const bloodGroup = bloodGroups.filter(
        (bloodGroup) => bloodGroup._id === bloodGroupId
      )[0];
      setBloodType(bloodGroup?.bloodType);
    }
  }, [bloodGroupId, bloodGroups]);

  const handleUpdateAdminProfileSubmit = async (bloodGroup: {
    bloodType: string;
  }) => {
    try {
      setIsLoading(true);
      if (bloodGroupId) {
        const bloodGroupResponse = await editBloodGroup(
          bloodGroup,
          bloodGroupId
        );
        dispatch(
          updateBloodGroup({ editedBloodGroup: bloodGroupResponse.data })
        );
        setError([""]);
        setIsLoading(false);
        navigate("/manage-blood-groups");
      }
    } catch (err: any) {
      setError([err.response.data.error]);
      setIsLoading(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(bloodType);
  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      {bloodType && (
        <Formik
          initialValues={{
            bloodType,
          }}
          onSubmit={(bloodTypeData) => {
            console.log(bloodTypeData);
            handleUpdateAdminProfileSubmit(bloodTypeData);
          }}
          validationSchema={bloodGroupSchema}
        >
          {({ handleSubmit, handleChange, errors, touched, values }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="bloodType">Blood Type</FormLabel>
                <FormInput
                  type="text"
                  id="bloodType"
                  placeholder="Enter Blood Type"
                  name="bloodType"
                  onChange={handleChange}
                  value={values.bloodType}
                />
                {errors.bloodType && touched.bloodType ? (
                  <FormFieldError>{errors.bloodType}</FormFieldError>
                ) : null}
              </FormControl>
              <FormButton
                type="submit"
                isLoading={isLoading ? true : false}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Editing Blood Type..." : "Edit Blood Type"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditBloodGroup;
