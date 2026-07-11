import { COLORS } from "@/constants/theme";
import { Href, Link } from "expo-router";
import React from "react";
import type { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

interface BaseButtonProps {
  variant?: "primary" | "secondary";
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
}

type Button = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<React.ComponentRef<typeof TouchableOpacity>>
> & {
  Radio: typeof RadioButton;
  Link: typeof LinkButton;
};

type ButtonProps = BaseButtonProps &
  TouchableOpacityProps & {
    onPress?: () => void;
  };

const Button = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    { variant = "primary", style, textStyle, onPress, children, ...props },
    ref,
  ) => {
    const backgroundColor =
      variant === "primary" ? COLORS.purple[500] : COLORS.white;
    const color = variant === "primary" ? COLORS.white : COLORS.purple[400];
    const shadowColor =
      variant === "primary" ? COLORS.purple[600] : COLORS.purple[100];

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            height: moderateScale(52),
            width: "100%",
            backgroundColor,
            borderRadius: 50,
            marginBottom: 8,
            boxShadow: "0px 8px 0px " + shadowColor,
          },
          style,
        ]}
        onPress={onPress}
        {...props}
      >
        <Text
          style={[
            {
              fontFamily: "Poppins_Medium",
              fontSize: moderateScale(20),
              color,
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  },
) as Button;

type LinkButtonProps = ButtonProps & {
  href: Href;
};

const LinkButton = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  LinkButtonProps
>(({ href, ...props }, ref) => {
  return (
    <Link href={href} asChild>
      <Button ref={ref} {...props} />
    </Link>
  );
});
Button.Link = LinkButton;

type RadioButtonProps<T> = BaseButtonProps & {
  onPress?: () => void;
  intialValue: T;
  selectedValue: T;
};

const RadioButton = <T extends string | number>({
  style,
  textStyle,
  onPress,
  children,
  intialValue,
  selectedValue,
}: RadioButtonProps<T>) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        {
          justifyContent: "center",
          height: moderateScale(80),
          padding: 6,
          backgroundColor:
            selectedValue === intialValue ? COLORS.white : COLORS.purple[400],
          borderRadius: 12,
        },
        style,
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: moderateScale(16),
          gap: moderateScale(24),
          backgroundColor: COLORS.purple[400],
          borderRadius: 8,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: moderateScale(4),
            height: moderateScale(24),
            width: moderateScale(24),
            borderColor: COLORS.white,
            borderRadius: 50,
            borderWidth: 1,
          }}
        >
          {selectedValue === intialValue && (
            <View
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            />
          )}
        </View>
        <Text
          style={[
            {
              fontFamily: "CherryBombOne_Regular",
              fontSize: moderateScale(32),
              color: COLORS.white,
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
Button.Radio = RadioButton;

export default Button;
