import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {isEditing ? 'Editar Producto' : 'Agregar Producto'}
      </Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={[styles.input, errors.nombre ? styles.errorInput : null]}
        placeholder="Nombre del producto"
        value={product.nombre}
        onChangeText={text => handleChange('nombre', text)}
      />
      {errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, errors.descripcion ? styles.errorInput : null]}
        placeholder="Descripción del producto"
        value={product.descripcion}
        onChangeText={text => handleChange('descripcion', text)}
      />
      {errors.descripcion && (
        <Text style={styles.errorText}>{errors.descripcion}</Text>
      )}

      <Text style={styles.label}>Logo URL</Text>
      <TextInput
        style={[styles.input, errors.logoUrl ? styles.errorInput : null]}
        placeholder="http://ejemplo.com/logo.png"
        value={product.logoUrl}
        onChangeText={text => handleChange('logoUrl', text)}
      />
      {errors.logoUrl && <Text style={styles.errorText}>{errors.logoUrl}</Text>}

      <Text style={styles.label}>Fecha de Liberación</Text>
      <TextInput
        style={[
          styles.input,
          errors.fechaLiberacion ? styles.errorInput : null,
        ]}
        placeholder="YYYY-MM-DD"
        value={product.fechaLiberacion}
        onChangeText={text => handleChange('fechaLiberacion', text)}
      />
      {errors.fechaLiberacion && (
        <Text style={styles.errorText}>{errors.fechaLiberacion}</Text>
      )}

      <Text style={styles.label}>Fecha de Revisión</Text>
      <TextInput
        style={[styles.input, errors.fechaRevision ? styles.errorInput : null]}
        placeholder="YYYY-MM-DD"
        value={product.fechaRevision}
        onChangeText={text => handleChange('fechaRevision', text)}
      />
      {errors.fechaRevision && (
        <Text style={styles.errorText}>{errors.fechaRevision}</Text>
      )}
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
