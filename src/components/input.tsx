import { COLORS } from "@/constants/theme";
import React from "react";
import { useTranslation } from "react-i18next";
import type { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { TextInput, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

interface InputProps extends TextInputProps {
  style?: never;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, containerStyle, textStyle, ...props }, ref) => {
    const { t } = useTranslation();

    return (
      <View
        style={[
          {
            paddingVertical: moderateScale(8),
            paddingHorizontal: scale(12),
            backgroundColor: COLORS.white,
            borderRadius: 12,
            boxShadow: "2px 8px 4px " + COLORS.purple[400],
          },
          containerStyle,
        ]}
      >
        <TextInput
          ref={ref}
          placeholder={t("text.typeHere.title")}
          style={[
            {
              fontFamily: "Poppins_Regular",
              fontSize: scale(12),
              color: COLORS.black,
            },
            textStyle,
          ]}
          placeholderTextColor={COLORS.black}
          importantForAutofill="no"
          autoComplete="off"
          textContentType="none"
          autoCapitalize="none"
          {...props}
        />
      </View>
    );
  },
);

export default Input;
