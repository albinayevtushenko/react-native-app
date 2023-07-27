import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },

  title: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },
  form: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  passIputContainer: {
    position: "relative",
    marginTop: 16,
  },
  input: {
    paddingHorizontal: 16,
    height: 50,

    color: "#000000",
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  showPassBtn: {
    position: "absolute",
    bottom: 0,
    right: 16,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  passBtnLabel: {
    color: "#1B4371",
  },
  submitBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  submitBtnLabel: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
  regOfferContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  regOfferText: {},
  regOfferBtn: {},
  regOfferBtnLabel: {
    color: "#1B4371",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default styles;
