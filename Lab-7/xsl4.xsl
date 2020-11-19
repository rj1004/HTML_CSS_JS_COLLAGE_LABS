<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">


	<html xmlns="http://www.w3.org/1999/xhtml">
		<body>
			<h1>Products Which is less then 300 in price</h1>
			<table border="1">
				<tr>
					<th>Product Title</th>
					<th>Price</th>
				</tr>
				<xsl:for-each select="Products/p[price &lt; '300']">
					<tr>
						<td><xsl:value-of select="title"></xsl:value-of></td>
						<td><xsl:value-of select="price"></xsl:value-of></td>
					</tr>
				</xsl:for-each>
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>
