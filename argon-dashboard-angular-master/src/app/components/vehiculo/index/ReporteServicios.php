<?php
$btnPrueba= "";

if(isset($_POST['valor']))$btnPrueba=$_POST['valor'];
if($btnPrueba){
    
    require('fpdf/fpdf.php');
class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    // Logo
    $this->Image('logo.png',10,10,50);
    // Arial bold 15
    $this->SetFont('Arial','B',30);
    // Movernos a la derecha
    $this->Cell(80);
    // Título
    $this->Cell(50,20,utf8_decode('Gruas Calkiní'),5,0,'C');
    $this->Ln(10);
    $this->Cell(80);
    $this->Cell(50,20,'S.A de C.v',20,0,'C');
    // Salto de línea
    $this->Ln(40);
    
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}
function PDFs($cliente, $sucursal){
    $mysqli = new mysqli("localhost", "root", "", "pepe2");
    $consulta = "SELECT * FROM vehicles WHERE sucursal = 'hopelchen'";
    $resultado = $mysqli->query($consulta);
    $resultado2 = $mysqli->query($consulta);
    
    
    
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(30,30,'ID',1,0,'C', 0);
    $pdf->Cell(30,30,'MODELO',1,0,'C', 0);
    $pdf->Cell(30,30,'MARCA',1,0,'C', 0);
    $pdf->Cell(30,30,'COLOR',1,0,'C', 0);
    $pdf->Cell(40,30,'PLACAS',1,0,'C', 0);
    $pdf->Cell(40,30,'LLAVES',1,0,'C', 0);
    $pdf->setFont('Arial','',12);
    while($row = $resultado->fetch_assoc()){
        $pdf->LN(30);
        $pdf->Cell(30,30,$row['id'], 1, 0, 'C', 0);
        $pdf->Cell(30,30,$row['modelo'], 1, 0, 'C', 0);
        $pdf->Cell(30,30,$row['marca'], 1, 0, 'C', 0);
        $pdf->Cell(30,30,$row['color'], 1, 0, 'C', 0);
        $pdf->Cell(40,30,$row['placas'], 1, 0, 'C', 0);
        $pdf->Cell(40,30,$row['llaves'], 1, 0, 'C', 0);
    }
    $pdf->Ln(50);
    $pdf->setFont('Arial','B',12);
    $pdf->Cell(40,30,'TIPO SERVICIO',1,0,'C', 0);
    $pdf->Cell(40,30,'LUGAR SINIESTRO',1,0,'C', 0);
    $pdf->Cell(40,30,'DESCRIPCION',1,0,'C', 0);
    $pdf->Cell(40,30,'NOMBRE',1,0,'C', 0);
    $pdf->Cell(40,30,'SUCURSAL',1,0,'C', 0);
    $pdf->setFont('Arial','',12);
    while($rows = $resultado2->fetch_assoc()){
        $pdf->LN(30);
        $pdf->Cell(40,30,$rows['tipo_servicio'], 1, 0, 'C', 0);
        $pdf->Cell(40,30,$rows['lugar_siniestro'], 1, 0, 'C', 0);
        $pdf->Cell(40,30,$rows['descripcion'], 1, 0, 'C', 0);
        $pdf->Cell(40,30,$rows['nombre'], 1, 0, 'C', 0);
        $pdf->Cell(40,30,$rows['sucursal'], 1, 0, 'C', 0);
    }
    
    
    }
    $pdf = new PDF();
    $pdf->AddPage();
    $pdf->PDFs();
    $pdf->Output();
}
?>