import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { io } from "socket.io-client";
import Checkbox from "../components/checkbox";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { api } from "../service/api";
const socket = io("https://apiprojectfocus.herokuapp.com");

export default function Cadastro({ navigation }) {
  const [view, setView] = useState(1);
  const [checked, setChecked] = useState(false);
  const [pessoa, setPessoa] = useState("");
  const [checkedPessoaFisica, setCheckedPessoaFisica] = useState(false);
  const [checkedPessoaJuridica, setCheckedPessoaJuridica] = useState(false);
  const [masculino, setMasculino] = useState(false);
  const [feminino, setFeminino] = useState(false);

  function CheckedPessoa() {
    if (checkedPessoaFisica === true) {
      setCheckedPessoaJuridica(false);
      setPessoa("Fisica");
    }
    if (checkedPessoaJuridica === true) {
      setCheckedPessoaFisica(false);
      setPessoa("Juridica");
    }
  }

  const cadastro = async (values) => {
    // const { status, data } = await api.post("/cadastro", {
    //   nome: values.nome,
    //   sobrenome: values.sobrenome,
    //   CPF: values.cpf,
    //   email: values.email,
    //   numerodetelefone: values.numerodetelefone,
    //   sexo: CheckedSexo(),
    //   cep: values.cep,
    //   endereco: values.endereco,
    //   complemento: values.complemento,
    //   cidade: values.cidadade,
    //   estado: values.estado,
    //   pessoa: pessoa,
    //   senha: values.senha,
    // });

    socket.emit("cadastrar_usuario", {
      user: values,
      nome: `${values.nome}_${values.sobrenome}`,
    });

    navigation.navigate("Login");
  };

  function CheckedSexo() {
    if (masculino === true) {
      setFeminino(false);
      return "masculino";
    }
    if (feminino === true) {
      setMasculino(false);
      return "feminino";
    }
  }

  useEffect(() => {
    CheckedPessoa();
  }, [checkedPessoaJuridica, checkedPessoaFisica]);

  useEffect(() => {
    CheckedSexo();
  }, [masculino, feminino]);

  return (
    <View style={{ flex: 1 }}>
      <Formik
        initialValues={{
          email: "",
          confirmarEmail: "",
          senha: "",
          confirmarSenha: "",
          nome: "",
          sobrenome: "",
          cpf: "",
          cnpj: "",
          numerodetelefone: "",

          cep: "",
          endereco: "",
          complemento: "",
          cidade: "",
          estado: "",
        }}
        onSubmit={(values) => cadastro(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            {view === 1 && (
              <SafeAreaView style={styles.container}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "400",
                    alignSelf: "center",
                    marginTop: 81,
                  }}
                >
                  Cadastro
                </Text>
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={{ marginTop: 40 }}>E-mail</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginTop: 20 }}>Confirmar E-mail</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        onChangeText={handleChange("confirmarEmail")}
                        onBlur={handleBlur("confirmarEmail")}
                        value={values.confirmarEmail}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginTop: 20 }}>Senha</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        secureTextEntry
                        onChangeText={handleChange("senha")}
                        onBlur={handleBlur("senha")}
                        value={values.senha}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginTop: 20 }}>Confirmar Senha</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        secureTextEntry
                        onChangeText={handleChange("confirmarSenha")}
                        onBlur={handleBlur("confirmarSenha")}
                        value={values.confirmarSenha}
                      />
                    </View>
                  </View>
                  <View style={styles.checkboxview}>
                    <Checkbox checked={checked} setChecked={setChecked} />
                    <Text style={{ marginLeft: 10 }}>
                      Li e Concordo com os{" "}
                      <Text style={{ color: "#282F62" }}>Termos de Uso</Text>
                    </Text>
                  </View>
                  <View style={styles.checkboxview}>
                    <Checkbox checked={checked} setChecked={setChecked} />
                    <Text style={{ marginLeft: 10 }}>
                      Li e Concordo com os{" "}
                      <Text style={{ color: "#282F62" }}>
                        Termos de Privacidade
                      </Text>
                    </Text>
                  </View>
                </View>
              </SafeAreaView>
            )}
            {view === 2 && (
              <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={{ height: "100%" }}
                >
                  <ScrollView>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "400",
                        alignSelf: "center",
                        marginTop: 81,
                      }}
                    >
                      Dados Pessoais
                    </Text>
                    <View style={styles.inputWrapper}>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 40 }}>Nome</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("nome")}
                              onBlur={handleBlur("nome")}
                              value={values.nome}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 40 }}>Sobrenome</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("sobrenome")}
                              onBlur={handleBlur("sobrenome")}
                              value={values.sobrenome}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        {checkedPessoaFisica === true && (
                          <View style={{ width: "45%" }}>
                            <Text style={{ marginTop: 20 }}>CPF</Text>
                            <View style={styles.input}>
                              <TextInput
                                style={{ marginLeft: 10 }}
                                onChangeText={handleChange("cpf")}
                                onBlur={handleBlur("cpf")}
                                value={values.cpf}
                              />
                            </View>
                          </View>
                        )}
                        {checkedPessoaJuridica === true && (
                          <View style={{ width: "45%" }}>
                            <Text style={{ marginTop: 20 }}>CNPJ</Text>
                            <View style={styles.input}>
                              <TextInput
                                style={{ marginLeft: 10 }}
                                onChangeText={handleChange("cnpj")}
                                onBlur={handleBlur("cnpj")}
                                value={values.cnpj}
                              />
                            </View>
                          </View>
                        )}
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 20 }}>E-mail</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("email")}
                              onBlur={handleBlur("email")}
                              value={values.email}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 20 }}>
                            Numero de celular
                          </Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("numerodetelefone")}
                              onBlur={handleBlur("numerodetelefone")}
                              value={values.numerodetelefone}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%", flexDirection: "row" }}>
                          <Text style={{ marginTop: 20 }}>Sexo: </Text>
                          <View style={{ marginTop: 20 }}>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Text style={{ marginRight: 10 }}>Masculino</Text>
                              <Checkbox
                                checked={masculino}
                                setChecked={setMasculino}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Text style={{ marginRight: 10 }}>Feminino</Text>
                              <Checkbox
                                checked={feminino}
                                setChecked={setFeminino}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 50 }}>CEP</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("cep")}
                              onBlur={handleBlur("cep")}
                              value={values.cep}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 20 }}>Endereço</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("endereco")}
                              onBlur={handleBlur("endereco")}
                              value={values.endereco}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 20 }}>Complemento</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("complemento")}
                              onBlur={handleBlur("complemento")}
                              value={values.complemento}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 20 }}>Cidade</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("cidade")}
                              onBlur={handleBlur("cidade")}
                              value={values.cidade}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%" }}>
                          <Text style={{ marginTop: 20 }}>Estado</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("estado")}
                              onBlur={handleBlur("estado")}
                              value={values.estado}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={styles.checkboxview}>
                        <Checkbox
                          checked={checkedPessoaFisica}
                          setChecked={setCheckedPessoaFisica}
                        />
                        <Text style={{ marginLeft: 10 }}>Pessoa Fisica</Text>
                      </View>
                      <View style={styles.checkboxview}>
                        <Checkbox
                          checked={checkedPessoaJuridica}
                          setChecked={setCheckedPessoaJuridica}
                        />
                        <Text style={{ marginLeft: 10 }}>Pessoa Juridica</Text>
                      </View>
                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </SafeAreaView>
            )}
            {view === 3 && (
              <SafeAreaView
                style={{
                  ...styles.container,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.otpWrapper}>
                  <View style={styles.otpInput}>
                    <TextInput
                      style={{
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                      }}
                      maxLength={1}
                    />
                  </View>
                  <View style={styles.otpInput}>
                    <TextInput />
                  </View>
                  <View style={styles.otpInput}>
                    <TextInput />
                  </View>
                  <View style={styles.otpInput}>
                    <TextInput />
                  </View>
                </View>
                {view === 3 && (
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      Confirmar
                    </Text>
                  </TouchableOpacity>
                )}
              </SafeAreaView>
            )}
            {view !== 3 && (
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 30,
                }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    view === 1 ? navigation.goBack() : setView(view - 1);
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 20, fontWeight: "700" }}
                  >
                    Voltar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setView(view + 1);
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 20, fontWeight: "700" }}
                  >
                    Proximo
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpInput: {
    height: 50,
    width: 60,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  otpWrapper: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "85%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    height: 24,
    borderRadius: 15,
    justifyContent: "center",
  },
  inputMid: {
    borderWidth: 1,
    width: "45%",
    height: 24,
    borderRadius: 15,
    justifyContent: "center",
  },
  checkboxview: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    height: 38,
    width: 105,
    backgroundColor: "#3B5998",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  inputRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: "#000",
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  buttonLogin: {
    backgroundColor: "#3B5998",
    width: 146,
    height: 45,
    borderRadius: 15,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
