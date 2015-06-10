  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
   
   <div id="left"> 
 	<div id="navigation"> 
	<ul>
	  <li><c:if test="${param.major eq 'Home'}"><span id="this_major"></c:if><a href="index.jsp">Home</a><c:if test="${param.major eq 'Home'}"></span></c:if></li>
	  <li><c:if test="${param.major eq 'Services'}"><span id="this_major"></c:if><a href="ServiceOverview.jsp">Our Services</a><c:if test="${param.major eq 'Services'}"></span></c:if></li>
	  <c:if test="${param.major eq 'Services'}">
	  <li>
	   <ul>
	    <li><c:if test="${param.minor eq 'Overview'}"><span id="this_minor"></c:if><a href="ServiceOverview.jsp">&gt; Overview</a><c:if test="${param.minor eq 'Overview'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Employment'}"><span id="this_minor"></c:if><a href="Employment.jsp">&gt; Employment Law</a><c:if test="${param.minor eq 'Employment'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Prenuptial'}"><span id="this_minor"></c:if><a href="Prenuptial.jsp">&gt; Prenuptial Agreement</a><c:if test="${param.minor eq 'Prenuptial'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Children'}"><span id="this_minor"></c:if><a href="Children.jsp">&gt; Children</a><c:if test="${param.minor eq 'Children'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Divorce'}"><span id="this_minor"></c:if><a href="Divorce.jsp">&gt; Divorce</a><c:if test="${param.minor eq 'Divorce'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Pensions'}"><span id="this_minor"></c:if><a href="Pensions.jsp">&gt; Pensions</a><c:if test="${param.minor eq 'Pensions'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Wills'}"><span id="this_minor"></c:if><a href="Wills.jsp">&gt; Wills &amp; Probate</a><c:if test="${param.minor eq 'Wills'}"></span></c:if></li>
	    <li><c:if test="${param.minor eq 'Estate'}"><span id="this_minor"></c:if><a href="Estate.jsp">&gt; Estate Administration</a><c:if test="${param.minor eq 'Estate'}"></span></c:if></li>
	   </ul> 
	  </li>
          </c:if>
	  <li><c:if test="${param.major eq 'Articles'}"><span id="this_major"></c:if><a href="Articles.jsp">Articles</a><c:if test="${param.major eq 'Articles'}"></span></c:if></li>
	  <li><c:if test="${param.major eq 'News'}"><span id="this_major"></c:if><a href="News.jsp">News</a><c:if test="${param.major eq 'News'}"></span></c:if></li>
	  <li><c:if test="${param.major eq 'Enquiry'}"><span id="this_major"></c:if><a href="Enquiry.jsp">Submit Enquiry</a><c:if test="${param.major eq 'Enquiry'}"></span></c:if></li>
	  <li><c:if test="${param.major eq 'Contact'}"><span id="this_major"></c:if><a href="Contact.jsp">Contact us</a><c:if test="${param.major eq 'Contact'}"></span></c:if></li>
	  <li><c:if test="${param.major eq 'About'}"><span id="this_major"></c:if><a href="About.jsp">About Us</a><c:if test="${param.major eq 'About'}"></span></c:if></li>
	  <li><c:if test="${param.major eq 'Links'}"><span id="this_major"></c:if><a href="Links.jsp">External Links</a><c:if test="${param.major eq 'Links'}"></span></c:if></li>
	</ul>
   </div>
  </div>