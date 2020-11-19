<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">


	<html xmlns="http://www.w3.org/1999/xhtml">
		<body>
			<h1>Book Record</h1>
			<table border="1">
				<tr>
					<th>name</th>
					<th>auther</th>
					<th>isbn</th>
					<th>quantity</th>
				</tr>

				<xsl:for-each select="BookCollection/Book">
					<tr>
						<td><xsl:value-of select="name"></xsl:value-of></td>
						<td><xsl:value-of select="auther"></xsl:value-of></td>
						<td><xsl:value-of select="ISBN-number"></xsl:value-of></td>
						<td><xsl:value-of select="quantity"></xsl:value-of></td>
					</tr>
				</xsl:for-each>
			</table>
		</body>
	</html>
	</xsl:template>
</xsl:stylesheet>