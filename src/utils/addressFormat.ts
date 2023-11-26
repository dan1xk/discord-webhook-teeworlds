function addressFormat(ip: string) {
  const addressFormatted = ip.split('//')[1];

  return addressFormatted;
}

export default addressFormat;
