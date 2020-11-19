<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
<xsl:template match="/">




	<html xmlns="http://www.w3.org/1999/xhtml">
<body style="background: white;margin: 0 200px;padding: 0;color: black;">
	<h1 style="margin: 20px;text-align: center;">

	 The Maharaja Sayajirav University of Baroda</h1>
	<h3 style="text-align: center;">Vadodara-390002,Gujarat,India</h3>
	<hr style="background: white;margin: 20px">
	</hr>

	<table border="1"> 
		<thead>
			<tr>
				
<th rowspan="2">	Course Name</th>
<th rowspan="2">AM</th>
<th colspan="3">   UA</th>
<th colspan="3">   IA</th>
<th colspan="3"> Total</th>
<th rowspan="2">Sts</th>
<th rowspan="2">Rmk</th>
			</tr>
			<tr>
				<th>MAX</th>
				<th>MIN</th>
				<th>OBT</th>
				<th>MAX</th>
				<th>MIN</th>
				<th>OBT</th>
				<th>MAX</th>
				<th>MIN</th>
				<th>OBT</th>
			</tr>
		</thead>
		<tbody>
			<xsl:for-each select="Marksheet/courses/co">
				<tr>
				
				<td><xsl:value-of select="name"> </xsl:value-of></td>
				<td><xsl:value-of select="am"> </xsl:value-of></td>
				<td><xsl:value-of select="ua/max"> </xsl:value-of></td>
				<td><xsl:value-of select="ua/min"> </xsl:value-of></td>
				<td><xsl:value-of select="ua/obt"> </xsl:value-of></td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td><xsl:value-of select="total/max"> </xsl:value-of></td>
				<td><xsl:value-of select="total/min"> </xsl:value-of></td>
				<td><xsl:value-of select="total/obt"> </xsl:value-of></td>
				<td><xsl:value-of select="sts"> </xsl:value-of></td>
				<td><xsl:value-of select="rmk"> </xsl:value-of></td>
			</tr>
			</xsl:for-each>
			
			
			<tr>
				<th colspan="5">Total</th>
				<th ><xsl:value-of select="Marksheet/total"></xsl:value-of></th>
				<th colspan="5"></th>
				<th><xsl:value-of select="Marksheet/total"></xsl:value-of></th>
				<th colspan="2"></th>
			</tr>

			<tr>
				<td colspan="14">
					Grand Total: <xsl:value-of select="Marksheet/grandtotal"></xsl:value-of>		 out of 1400       Percentage: <xsl:value-of select="Marksheet/per"></xsl:value-of> %
				</td>
			</tr>
			<tr>
				<td colspan="14">
					Abbreviations:IA
				</td>
			</tr>
		</tbody>
	</table>

</body>
</html>







</xsl:template>
</xsl:stylesheet>
