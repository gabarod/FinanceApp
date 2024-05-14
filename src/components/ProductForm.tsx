import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProductForm = ({
  isEditing = false,
  product,
  errors,
  handleChange,
  handleSubmit,
  handleReset,
}) => {
  const handleFormSubmit = () => {
    handleSubmit();
  };

  const [openRelease, setOpenRelease] = useState(false);
  const [openRevision, setOpenRevision] = useState(false);

  const onReleaseChange = (event, selectedDate) => {
    const currentDate = selectedDate || product.date_release;
    setOpenRelease(false);
    handleChange('date_release', currentDate.toISOString().split('T')[0]);
  };

  const onRevisionChange = (event, selectedDate) => {
    const currentDate = selectedDate || product.date_revision;
    setOpenRevision(false);
    handleChange('date_revision', currentDate.toISOString().split('T')[0]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID</Text>
      <TextInput
        style={[styles.input, errors.id ? styles.errorInput : null]}
        placeholder="ID del producto"
        value={product.id}
        onChangeText={text => handleChange('id', text)}
      />
      {errors.id && <Text style={styles.errorText}>{errors.id}</Text>}

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={[styles.input, errors.name ? styles.errorInput : null]}
        placeholder="Nombre del producto"
        value={product.name}
        onChangeText={text => handleChange('name', text)}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, errors.description ? styles.errorInput : null]}
        placeholder="Descripción del producto"
        value={product.description}
        onChangeText={text => handleChange('description', text)}
      />
      {errors.description && (
        <Text style={styles.errorText}>{errors.description}</Text>
      )}

      <Text style={styles.label}>Logo URL</Text>
      <TextInput
        style={[styles.input, errors.logo ? styles.errorInput : null]}
        placeholder="http://ejemplo.com/logo.png"
        value={product.logo}
        onChangeText={text => handleChange('logo', text)}
      />
      {errors.logo && <Text style={styles.errorText}>{errors.logo}</Text>}

      <Text style={styles.label}>Fecha de Liberación</Text>
      <View style={styles.input}>
        <Button title={product.date_release || "Seleccionar Fecha de Liberación"} onPress={() => setOpenRelease(true)} />
        {openRelease && (
          <DateTimePicker
            value={new Date(product.date_release) || new Date()}
            mode="date"
            display="default"
            onChange={onReleaseChange}
          />
        )}
      </View>
      {errors.date_release && <Text style={styles.errorText}>{errors.date_release}</Text>}

      <Text style={styles.label}>Fecha de Revisión</Text>
      <View style={styles.input}>
        <Button title={product.date_revision || "Seleccionar Fecha de Revisión"} onPress={() => setOpenRevision(true)} />
        {openRevision && (
          <DateTimePicker
            value={new Date(product.date_revision) || new Date()}
            mode="date"
            display="default"
            minimumDate={new Date(product.date_release)}
            onChange={onRevisionChange}
          />
        )}
      </View>
      {errors.date_revision && <Text style={styles.errorText}>{errors.date_revision}</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 2,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ProductForm;
