import React from 'react';
import UsbBox from './usbBox'

const UsbPage : React.FC = () => {
  return (
    <div className="usb-wrapper">
      <h2>USB Devices</h2>
      <UsbBox></UsbBox>
    </div>
  );
};

export default UsbPage;