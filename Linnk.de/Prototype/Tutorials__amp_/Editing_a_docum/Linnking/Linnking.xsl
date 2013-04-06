<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:template match="/"><html xmlns="http://www.w3.org/1999/xhtml"><head><title><xsl:value-of select="linnkcontent/v03.linnkdocument/item[@class='v01.titleitem']/title"></xsl:value-of></title><link href="styles.css" media="screen" type="text/css" rel="stylesheet"></link><link href="print.css" media="print" type="text/css" rel="stylesheet"></link></head><body><div id="header"><div class="midHeader"><h1 class="headerTitle"><xsl:value-of select="linnkcontent/v03.linnkdocument/item[@class='v01.titleitem']/title"></xsl:value-of></h1></div><div class="subHeader"><div id="slogan"><xsl:value-of select="linnkcontent/v03.linnkdocument/item[@class='v01.titleitem']/title"></xsl:value-of></div></div></div><div id="side-bar"><div><ul><li><a href="../Editing_a_docum.xml">Level Up</a></li><li><a type="application/linnk" href="Linnking.linnk">Edit Document</a></li></ul></div><div class="lighterBackground"><p class="sideBarTitle"></p><span class="sideBarText"><br></br></span></div></div><div id="main-copy"><xsl:apply-templates></xsl:apply-templates></div><div id="footer"><div class="left"></div></div></body></html></xsl:template><xsl:template match="linnkcontent/v03.linnkdocument" xmlns="http://www.w3.org/1999/xhtml"><div class="document" xmlns="http://www.w3.org/1999/xhtml"><xsl:apply-templates xmlns="http://www.w3.org/1999/xhtml"></xsl:apply-templates></div></xsl:template><xsl:template match="uri" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="creator" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="created" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="versions" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="name" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="filename" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="item[@class='v01.titleitem' and id='title']" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem1']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v01.ext.jpegpictureitem' and id='ImageItem']" xmlns="http://www.w3.org/1999/xhtml"><div class="jpegpictureitem" xmlns="http://www.w3.org/1999/xhtml"><img xmlns="http://www.w3.org/1999/xhtml"><xsl:attribute name="src" xmlns="http://www.w3.org/1999/xhtml">doc_attachments/ImageItem.png</xsl:attribute></img></div></xsl:template><xsl:template match="item[@class='v04.owneritem' and id='linkedby']" xmlns="http://www.w3.org/1999/xhtml"></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem2']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem10']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem3']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v01.ext.jpegpictureitem' and id='ImageItem1']" xmlns="http://www.w3.org/1999/xhtml"><div class="jpegpictureitem" xmlns="http://www.w3.org/1999/xhtml"><img xmlns="http://www.w3.org/1999/xhtml"><xsl:attribute name="src" xmlns="http://www.w3.org/1999/xhtml">doc_attachments/ImageItem1.png</xsl:attribute></img></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem4']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v01.ext.jpegpictureitem' and id='ImageItem2']" xmlns="http://www.w3.org/1999/xhtml"><div class="jpegpictureitem" xmlns="http://www.w3.org/1999/xhtml"><img xmlns="http://www.w3.org/1999/xhtml"><xsl:attribute name="src" xmlns="http://www.w3.org/1999/xhtml">doc_attachments/ImageItem2.png</xsl:attribute></img></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem5']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem6']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem7']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v01.ext.jpegpictureitem' and id='ImageItem3']" xmlns="http://www.w3.org/1999/xhtml"><div class="jpegpictureitem" xmlns="http://www.w3.org/1999/xhtml"><img xmlns="http://www.w3.org/1999/xhtml"><xsl:attribute name="src" xmlns="http://www.w3.org/1999/xhtml">doc_attachments/ImageItem3.png</xsl:attribute></img></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem8']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem9']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem11']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v01.ext.jpegpictureitem' and id='ImageItem4']" xmlns="http://www.w3.org/1999/xhtml"><div class="jpegpictureitem" xmlns="http://www.w3.org/1999/xhtml"><img xmlns="http://www.w3.org/1999/xhtml"><xsl:attribute name="src" xmlns="http://www.w3.org/1999/xhtml">doc_attachments/ImageItem4.png</xsl:attribute></img></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem12']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template><xsl:template match="item[@class='v02.textitem' and id='TextItem13']" xmlns="http://www.w3.org/1999/xhtml"><div class="textitem" xmlns="http://www.w3.org/1999/xhtml"><xsl:copy-of select="textXML/*|textXML/text()" xmlns="http://www.w3.org/1999/xhtml"></xsl:copy-of></div></xsl:template></xsl:stylesheet>