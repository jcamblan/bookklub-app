import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { H1, Text, theme } from 'ui';
import { Input, Error } from 'ui/form';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { CREATE_CLUB } from 'api/mutations';
import { Button } from 'ui/button';

const CreateClub = ({ navigation }) => {
  const [createClub] = useMutation(CREATE_CLUB, {
    refetchQueries: ['myClubs'],
  });

  const handleCreateClub = async values => {
    try {
      await createClub({
        variables: {
          input: values,
        },
      });
      navigation.navigate('ClubHome');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView style={{ padding: 20 }}>
          <H1>Create a club</H1>
          <Text style={{ marginBottom: theme.spacing() }}>
            Enter a name for your club, and remember, it's not a poney club.
          </Text>
          <Formik
            validationSchema={Yup.object().shape({ name: Yup.string() })}
            initialValues={{ name: '' }}
            onSubmit={handleCreateClub}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              handleBlur,
              status,
              errors,
              touched,
              isSubmitting,
            }) => (
              <View style={{ width: '100%' }}>
                <Input
                  label="Nom du club"
                  placeholder="Nom du club"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  returnKeyType="send"
                  error={touched.name && errors.name}
                  onSubmitEditing={() => handleSubmit(values)}
                />
                <Error>{status}</Error>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}
                >
                  <Button
                    onPress={() => handleSubmit(values)}
                    isLoading={isSubmitting}
                    variant="primary"
                  >
                    Create the club
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateClub;
