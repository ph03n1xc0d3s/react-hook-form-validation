import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {style} from '../Stylesheet/form';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from '../Validation/ValidationSchema';

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={style.mainContainer}>
      <View style={style.formContainer}>
        <Text style={style.formHeading}>
          Form Validation using React Hook Form and Yup
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={style.textInput}
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={style.errorText}>{errors.firstName.message}</Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={style.textInput}
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={style.errorText}>{errors.lastName.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={style.textInput}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={style.errorText}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={style.textInput}
              placeholder="Phone"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phone"
        />
        {errors.phone && (
          <Text style={style.errorText}>{errors.phone.message}</Text>
        )}
        <Text style={style.submitBtn} onPress={handleSubmit(onSubmit)}>
          Submit
        </Text>
      </View>
    </View>
  );
};

export default Form;
