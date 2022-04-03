import { Button, Modal, ModalBody,Box, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Flex, SimpleGrid, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"

export default function ModalC({isOpen, onClose, water}) {
  

  return (
      <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={2}></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
           <Flex direction={'column'} justifyItems='center' alignItems='center' border='1px solid #000' p={3}>
               <Text fontWeight='bold'>PROCESADORA AQUA HEREDIA</Text>
               <Text fontWeight='medium' fontSize='14'>{'"AQUAHER S.A"'}</Text>
               <Text fontWeight='medium' fontSize='13'>Dir: Sitio Buenos Aires S/N (Frente a la toma de agua EPAM)</Text>
               <Text fontWeight='medium' fontSize='12'>e-mail: aquaher@outlook.com</Text>
                <Box className="content-table-h" mt={5} mb={3}>
                    <Text fontWeight='bold' fontSize='13'>CERTIFICADO DE CALIDAD</Text>
                </Box>
                <SimpleGrid bg='rgb(214, 214, 214)' width={'full'} columns={3} spacingY={1}>
                    <Box>
                        <Text>Fecha:</Text>
                    </Box>
                    <Box>
                        <Text>{water.date}</Text>
                    </Box>
                    <Box>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Text>Lugar de muestreo:</Text>
                    </Box>
                    <Box>
                        <Text>{water.location}</Text>
                    </Box>
                    <Box>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Text>Descripción:</Text>
                    </Box>
                    <Box>
                        <Text>{water.name}</Text>
                    </Box>
                    <Box>
                        <Text>LOTE: AG0503302022</Text>
                    </Box>
                </SimpleGrid>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Estos parámetros son variables</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Parámetro</Th>
                                <Th>Resultado</Th>
                                <Th>Unidad</Th>
                                <Th>Método</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {water.quality.map(data=>{
                                return (
                                <Tr key={data.id}>
                                    <Td>{data.parameter}</Td>
                                    <Td>{data.result}</Td>
                                    <Td>{data.unit}</Td>
                                    <Td>{data.method}</Td>
                                </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box>
                <Text fontStyle='oblique' fontWeight='bold' fontSize='8'>*AQUAHER S.A no se responsabiliza por la variación de los parámetros del agua en tanqueros que no correspondan a la compañía de transporte HEREDIATRANS S.A, debido a que no seconoce el estado interno de los mismos.</Text>
                <Text fontStyle='oblique' fontWeight='bold' fontSize='8'>*El muestreo, manejo y conservación se realiza según establece la NTE INEN 2169</Text>
                </Box>

           </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}