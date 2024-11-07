import { View, Text, Alert, StyleSheet } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import Card from "@/components/containers/Card";
import PriceTag from "@/components/checkout/PriceTag";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import SendOptions from "@/components/checkout/SendOptions"
import Send from "@/components/containers/SendDefault"
import CheckoutPage from '@/components/containers/CheckoutPage';
import Coinspage from '@/components/containers/Coinspage';
import Ticket from "@/components/containers/Tickect";
import TicketOP from '@/components/checkout/TicketOp';
import TickectButton from "@/components/checkout/TicketOp";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };
  const handleSend = () => {
    Alert.alert("Escolha a opção")
  };
  const handleTicket = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  return (
    <FullScreen center>
      {/* <HeaderHidden /> */}
      <HeaderWithTitle title="Comprar" />

      <View style = {styles.header}>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          Variação: 2.4Ghz
        </Text>
        <Text>R$50,00</Text>
        
      </Card>
        <Send title="Opção de envio">
          <Text>Expresso padrão</Text>
          <Text>Receba entre 7 e 18 de nov</Text>
          <SendOptions customTitle="R$17,00" onPress={handleSend} />
        </Send>
      </View>

      <View style = {styles.layout}>

      <View style = {styles.container}>

        <Ticket title="">

        <Text>Cupom Shopee</Text>
        </Ticket>
        <TickectButton customTitle="Selecione ou insira o código" onPress={handleTicket}></TickectButton>

      </View>
        <View style = {styles.container}>

          <Coinspage title="">
            <Text>Sem moedas para aplicar</Text>
          </Coinspage>

        </View>
        <View style = {styles.container}>

            <CheckoutPage title="Pagamento total">
              <PriceTag price={50} />
            </CheckoutPage>

            <CheckoutButton customTitle="Fazer Pedido" onPress={handleCheckout} />
        </View>
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 1,
    flexDirection:'row',
  },
  layout: {
    bottom: 0,
    right: 0,
    left: 0,
      position: 'absolute',

    },
    header: {
      top: 0,
      right: 0,
      left: 0,
      position: 'absolute'
    },
    text:{
      fontSize: 12
    }
});
